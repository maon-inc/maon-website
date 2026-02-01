"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { VISION, FONT_SIZES } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <DotsScene
      svgUrl="/assets/ui/hero.svg"
      targetScale={0.8}
      targetAnchor="right-center"
      morphSpeedMult={2}
      stiffnessMult={2}
      snapOnEnter
      className="min-h-screen bg-[#f7f6f5] px-20 py-28"
    >
      <div ref={sectionRef}>
        {/* Label */}
        <p
          className="font-semibold text-[#8d8d8d]"
          style={{
            fontSize: FONT_SIZES.label,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          {VISION.label}
        </p>

        {/* Main content */}
        <div className="mt-35 max-w-2xl">
          <h2
            className="font-medium leading-tight text-[#1b1b1b]"
            style={{
              fontSize: FONT_SIZES.mainHeading,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
            }}
          >
            {VISION.headline}
          </h2>

          <p
            className="mt-8 font-medium text-[#1b1b1b]"
            style={{
              fontSize: FONT_SIZES.mainHeading,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
            }}
          >
            {VISION.subheadline}
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href={VISION.cta.href}
          className="mt-20 inline-flex w-fit items-center justify-center gap-2 px-5 py-2.5 font-normal text-[#1b1b1b] transition-opacity hover:opacity-90"
          style={{
            fontSize: "16px",
            border: "0.9px solid black",
            borderRadius: "11.28px",
            backgroundColor: "#91ef81",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.45s, transform 0.8s ease-out 0.45s",
          }}
        >
          {VISION.cta.label}
          <Image
            src="/assets/ui/solar_arrow-up-broken.svg"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </Link>
      </div>
    </DotsScene>
  );
}
