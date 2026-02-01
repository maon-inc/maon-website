"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { getGeoLocation, GeoLocation } from "@/lib/geolocation";
import { observeIntersection } from "@/motion/observe";

const DEVICES = [
  { name: "Apple Watch", icon: "/waitlist/apple.svg" },
  { name: "Galaxy Watch", icon: "/waitlist/galaxy.svg" },
  { name: "Bangle.js 2", icon: "/waitlist/bangle.svg" },
  { name: "fitbit", icon: "/waitlist/fitbit.svg" },
];

interface DeviceSelectProps {
  onDeviceSelect?: (waitlistId: Id<"waitlist">, deviceName?: string) => void;
}

export default function DeviceSelect({ onDeviceSelect }: DeviceSelectProps) {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const createWaitlistEntry = useMutation(api.waitlist.create);
  const [geoLocation, setGeoLocation] = useState<GeoLocation | null>(null);

  useEffect(() => {
    getGeoLocation().then(setGeoLocation);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    return observeIntersection(
      el,
      (intersecting) => {
        if (intersecting) setIsVisible(true);
      },
      { threshold: 0 }
    );
  }, []);

  const handleDeviceClick = async (deviceName: string) => {
    const id = await createWaitlistEntry({
      devicePicked: deviceName,
      country: geoLocation?.country,
      region: geoLocation?.region,
    });
    onDeviceSelect?.(id, deviceName);
  };

  const handleSkip = () => {
    onDeviceSelect?.(undefined as unknown as Id<"waitlist">, undefined);
  };

  return (
    <div ref={sectionRef} className="flex flex-col items-center">
      {/* Heading */}
      <h2
        className="font-semibold text-[#1b1b1b] text-center md:text-left w-full"
        style={{
          fontSize: isMobile ? "30px" : "60px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        Select your device
      </h2>

      {/* Device Grid */}
      <div
        className="mt-8 md:mt-12 w-full"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr",
          gridTemplateRows: isMobile ? "100px 100px 100px" : "160px 160px",
          gap: isMobile ? "12px" : "22px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
        }}
      >
        {/* Device cards */}
        {DEVICES.map((device, index) => (
          <div
            key={device.name}
            onClick={() => handleDeviceClick(device.name)}
            className="bg-white flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
            style={{
              borderRadius: isMobile ? "10px" : "20px",
              gridColumn: isMobile ? (index % 2) + 1 : (index % 2) + 1,
              gridRow: isMobile ? Math.floor(index / 2) + 1 : Math.floor(index / 2) + 1,
            }}
          >
            <p
              className="font-semibold text-black"
              style={{ fontSize: isMobile ? "14px" : "24px" }}
            >
              {device.name}
            </p>
            <div
              className="flex items-center justify-center"
              style={{
                marginTop: isMobile ? "10px" : "16px",
                height: isMobile ? "32px" : "60px",
              }}
            >
              <Image
                src={device.icon}
                alt={device.name}
                width={isMobile ? 20 : 40}
                height={isMobile ? 30 : 55}
                style={{ width: "auto", height: isMobile ? "30px" : "55px" }}
              />
            </div>
          </div>
        ))}

        {/* More coming card */}
        <div
          className="bg-white flex items-center justify-center"
          style={{
            borderRadius: isMobile ? "10px" : "20px",
            gridColumn: isMobile ? "1 / 3" : "3",
            gridRow: isMobile ? "3" : "1 / 3",
          }}
        >
          <p
            className="font-semibold text-black text-center whitespace-pre-wrap"
            style={{ fontSize: isMobile ? "14px" : "24px" }}
          >
            {isMobile ? "more coming.." : "more\ncoming.."}
          </p>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="mt-6 md:mt-8 text-[#1b1b1b] underline cursor-pointer hover:opacity-70"
        style={{
          fontSize: isMobile ? "16px" : "22px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
        }}
      >
        Skip
      </button>
    </div>
  );
}
