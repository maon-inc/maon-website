"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { APPROACH, FONT_SIZES, FONT_SIZES_MOBILE } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Approach() {
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
      dissipate
      morphSpeedMult={2}
      stiffnessMult={2}
      className="min-h-screen bg-[#f7f6f5] py-14"
    >
      <div ref={sectionRef} className="mx-auto max-w-[90%] md:max-w-none md:mx-0 md:px-20">
        <p
          className="mt-8 font-semibold text-[#8d8d8d]"
          style={{
            fontSize: fonts.label,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          {APPROACH.label}
        </p>

        <h2
          className="pt-30 max-w-5xl font-medium leading-tight text-[#1b1b1b] md:text-[35px] lg:text-[48px]"
          style={{
            fontSize: isMobile ? fonts.heroHeading : undefined,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
          }}
        >
          {APPROACH.headline}
        </h2>

        <div className="mt-14 grid md:w-[100%] lg:w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Listen to your body */}
          <div
            className="flex md:aspect-[1/.7] lg:aspect-[1/1.4] xl:aspect-[1/1] items-center md:items-start justify-center rounded-[20px] bg-white py-6 md:pt-14 md:pb-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
            }}
          >
            <div className="flex w-3/4 flex-row md:flex-col items-center md:items-start justify-start gap-6 md:gap-8">
              <div className="flex w-16 shrink-0 justify-center md:justify-start">
                <Image src="/assets/listen.svg" alt="Listen to your body" width={0} height={48} style={{ width: 'auto', height: 48 }} />
              </div>
              <p className="font-medium text-[#1b1b1b] text-left" style={{ fontSize: fonts.cardText }}>
                {APPROACH.cards[0].title}
              </p>
            </div>
          </div>

          {/* Card 2: Identify emotional patterns */}
          <div
            className="flex md:aspect-[1/.7] lg:aspect-[1/1.4] xl:aspect-[1/1] items-center md:items-start justify-center rounded-[20px] bg-white py-6 md:pt-14 md:pb-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
            }}
          >
            <div className="flex w-3/4 flex-row md:flex-col items-center md:items-start justify-start gap-6 md:gap-8">
              <div className="flex w-16 shrink-0 justify-center md:justify-start">
                <Image src="/assets/pattern.svg" alt="Identify emotional patterns" width={0} height={48} style={{ width: 'auto', height: 48 }} />
              </div>
              <p className="font-medium text-[#1b1b1b] text-left" style={{ fontSize: fonts.cardText }}>
                {APPROACH.cards[1].title}
              </p>
            </div>
          </div>

          {/* Card 3: Step in when it matters */}
          <div
            className="flex md:aspect-[1/.7] lg:aspect-[1/1.4] xl:aspect-[1/1] items-center md:items-start justify-center rounded-[20px] bg-white py-6 md:pt-14 md:pb-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s",
            }}
          >
            <div className="flex w-3/4 flex-row md:flex-col items-center md:items-start justify-start gap-6 md:gap-8">
              <div className="flex w-16 shrink-0 justify-center md:justify-start">
                <Image src="/assets/step.svg" alt="Step in when it matters" width={0} height={48} style={{ width: 'auto', height: 48 }} />
              </div>
              <p className="font-medium text-[#1b1b1b] text-left" style={{ fontSize: fonts.cardText }}>
                {APPROACH.cards[2].title}
              </p>
            </div>
          </div>

          {/* Card 4: Show you the bigger picture */}
          <div
            className="flex md:aspect-[1/.7] lg:aspect-[1/1.4] xl:aspect-[1/1] items-center md:items-start justify-center rounded-[20px] bg-white py-6 md:pt-14 md:pb-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
            }}
          >
            <div className="flex w-3/4 flex-row md:flex-col items-center md:items-start justify-start gap-6 md:gap-8">
              <div className="flex w-16 shrink-0 justify-center md:justify-start">
                <Image src="/assets/bigger.svg" alt="Show you the bigger picture" width={0} height={48} style={{ width: 'auto', height: 48 }} />
              </div>
              <p className="font-medium text-[#1b1b1b] text-left" style={{ fontSize: fonts.cardText }}>
                {APPROACH.cards[3].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DotsScene>
  );
}
