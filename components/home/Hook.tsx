"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HOOK, FONT_SIZES, FONT_SIZES_MOBILE, FONTS } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Hook() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const fonts = isMobile ? FONT_SIZES_MOBILE : FONT_SIZES;

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
      homeSnapMs={400}
      className="relative min-h-screen bg-[#f7f6f5]"
    >
      <div ref={sectionRef} className="absolute top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-30 lg:bottom-55 left-0 right-0 mx-auto max-w-[80%] md:left-20 md:right-auto md:mx-0 md:max-w-[50%]">
        <h1
          className="font-semibold leading-tight text-[#1b1b1b]"
          style={{
            fontFamily: FONTS.serif,
            fontSize: fonts.heroHeading,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          {HOOK.headline}
        </h1>

        <p
          className="mt-4 font-medium text-[#8d8d8d] w-[90%] leading-tight"
          style={{
            fontSize: fonts.subtitle,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
          }}
        >
          {HOOK.subtext}
        </p>

        <Link
          href={HOOK.cta.href}
          className="mt-8 inline-flex w-fit items-center justify-center gap-2 px-5 py-2.5 font-normal text-[#1b1b1b] transition-opacity hover:opacity-90"
          style={{
            fontSize: "16px",
            border: "0.9px solid black",
            borderRadius: "11.28px",
            backgroundColor: "#B7D7A8",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
          }}
        >
          {HOOK.cta.label}
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
