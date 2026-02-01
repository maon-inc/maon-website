"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HOOK, FONT_SIZES } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";

export default function Hook() {
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
      className="relative min-h-screen bg-[#f7f6f5]"
    >
      <div ref={sectionRef} className="absolute bottom-55 left-20 max-w-[50%]">
        <h1
          className="font-semibold leading-tight text-[#1b1b1b]"
          style={{
            fontFamily: "'Merriweather', serif",
            fontSize: FONT_SIZES.heroHeading,
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
            fontSize: FONT_SIZES.subtitle,
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
            backgroundColor: "#91ef81",
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
