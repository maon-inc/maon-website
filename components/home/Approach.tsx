"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { APPROACH, FONT_SIZES } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";

export default function Approach() {
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
      dissipate
      morphSpeedMult={2}
      stiffnessMult={2}
      className="min-h-screen bg-[#f7f6f5] px-20 py-14"
    >
      <div ref={sectionRef}>
        <p
          className="mt-8 font-semibold text-[#8d8d8d]"
          style={{
            fontSize: FONT_SIZES.label,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          {APPROACH.label}
        </p>

        <h2
          className="pt-30 max-w-5xl font-medium leading-tight text-[#1b1b1b]"
          style={{
            fontSize: FONT_SIZES.mainHeading,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
          }}
        >
          {APPROACH.headline}
        </h2>

        <div className="mt-14 grid w-[90%] grid-cols-4 gap-6">
          {/* Card 1: Listen to your body */}
          <div
            className="flex aspect-[1/1] items-start justify-center rounded-[20px] bg-white pt-14"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
            }}
          >
            <div className="flex w-3/4 flex-col gap-8">
              <div className="flex">
                <Image src="/assets/listen.svg" alt="Listen to your body" width={0} height={48} style={{ width: 'auto', height: 48 }} />
              </div>
              <p className="font-medium text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.cardText }}>
                {APPROACH.cards[0].title}
              </p>
            </div>
          </div>

          {/* Card 2: Identify emotional patterns */}
          <div
            className="flex aspect-[1/1] items-start justify-center rounded-[20px] bg-white pt-14"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
            }}
          >
            <div className="flex w-3/4 flex-col gap-8">
              <div className="flex">
                <Image src="/assets/pattern.svg" alt="Identify emotional patterns" width={0} height={48} style={{ width: 'auto', height: 48 }} />
              </div>
              <p className="font-medium text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.cardText }}>
                {APPROACH.cards[1].title}
              </p>
            </div>
          </div>

          {/* Card 3: Step in when it matters */}
          <div
            className="flex aspect-[1/1] items-start justify-center rounded-[20px] bg-white pt-14"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.5s, transform 0.8s ease-out 0.5s",
            }}
          >
            <div className="flex w-3/4 flex-col gap-8">
              <div className="flex">
                <Image src="/assets/step.svg" alt="Step in when it matters" width={0} height={48} style={{ width: 'auto', height: 48 }} />
              </div>
              <p className="font-medium text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.cardText }}>
                {APPROACH.cards[2].title}
              </p>
            </div>
          </div>

          {/* Card 4: Show you the bigger picture */}
          <div
            className="flex aspect-[1/1] items-start justify-center rounded-[20px] bg-white pt-14"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
            }}
          >
            <div className="flex w-3/4 flex-col gap-8">
              <div className="flex">
                <Image src="/assets/bigger.svg" alt="Show you the bigger picture" width={0} height={48} style={{ width: 'auto', height: 48 }} />
              </div>
              <p className="font-medium text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.cardText }}>
                {APPROACH.cards[3].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DotsScene>
  );
}
