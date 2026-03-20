"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { VISION, FONT_SIZES, FONT_SIZES_MOBILE } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import { useIsMobile } from "@/hooks/useIsMobile";
import { usePostHog } from "posthog-js/react";
import { useScrollContext } from "@/components/providers/ScrollProvider";
import { trackSectionViewed } from "@/lib/analytics";

export default function Vision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasCapturedSection = useRef(false);
  const isMobile = useIsMobile();
  const fonts = isMobile ? FONT_SIZES_MOBILE : FONT_SIZES;
  const posthog = usePostHog();
  const { setIsVisionVisible } = useScrollContext();

  const handleCtaClick = () => {
    posthog?.capture("waitlist_cta_click", { location: "vision_section" });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    return observeIntersection(
      el,
      (intersecting) => {
        if (intersecting) {
          setIsVisible(true);
          if (!hasCapturedSection.current) {
            trackSectionViewed("vision");
            hasCapturedSection.current = true;
          }
        }
        setIsVisionVisible(intersecting);
      },
      { threshold: 0 }
    );
  }, [setIsVisionVisible]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div ref={sectionRef} className="flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Main text */}
        <h2
          className="font-medium leading-tight text-[#1b1b1b]"
          style={{
            fontSize: fonts.mainHeading,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          Get immediate support before emotions escalate.
        </h2>

        {/* CTA Button */}
        <Link
          href={VISION.cta.href}
          onClick={handleCtaClick}
          className="mt-6 inline-flex w-fit items-center justify-center gap-2 px-5 py-2.5 font-normal text-white transition-opacity hover:opacity-90"
          style={{
            fontSize: "16px",
            borderRadius: "9999px",
            backgroundColor: "black",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
          }}
        >
          save your spot
        </Link>
      </div>
    </div>
  );
}
