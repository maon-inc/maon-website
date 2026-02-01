"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { DOS_DONTS, FONT_SIZES, FONT_SIZES_MOBILE } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function DosDonts() {
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
  }, [isMobile]);

  const content = (
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
          {DOS_DONTS.label}
        </p>

        {/* What we do section */}
        <p
          className="mt-30 font-semibold text-[#1b1b1b]"
          style={{
            fontSize: "24px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
          }}
        >
          {DOS_DONTS.doSection.title}
        </p>

        <div className="mt-6 grid md:w-[100%] lg:w-[90%] grid-cols-1 md:grid-cols-3 gap-6">
          {DOS_DONTS.doSection.cards.map((card, index) => (
            <div
              key={index}
              className="flex md:aspect-[1/1.2] lg:aspect-[1/1.1] xl:aspect-[1/.7] items-center md:items-start justify-center rounded-[20px] bg-white py-6 md:pt-10 md:pb-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.8s ease-out ${0.3 + index * 0.1}s, transform 0.8s ease-out ${0.3 + index * 0.1}s`,
              }}
            >
              <div className="flex w-3/4 flex-row md:flex-col items-center md:items-start justify-start gap-6">
                <div className="flex w-16 shrink-0 justify-center md:justify-start">
                  <Image
                    src={card.icon}
                    alt={card.text}
                    width={0}
                    height={42}
                    style={{ width: "auto", height: 42 }}
                  />
                </div>
                <p
                  className="font-medium text-[#1b1b1b] text-left"
                  style={{ fontSize: fonts.cardText }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What we don't do section */}
        <p
          className="mt-14 font-semibold text-[#1b1b1b]"
          style={{
            fontSize: "24px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
          }}
        >
          {DOS_DONTS.dontSection.title}
        </p>

        <div className="mt-6 grid md:w-[100%] lg:w-[90%] grid-cols-1 md:grid-cols-3 gap-6">
          {DOS_DONTS.dontSection.cards.map((card, index) => (
            <div
              key={index}
              className="flex md:aspect-[1/1.2] lg:aspect-[1/1.1] xl:aspect-[1/.7] items-center md:items-start justify-center rounded-[20px] bg-[#1b1b1b] py-6 md:pt-14 md:pb-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.8s ease-out ${0.75 + index * 0.1}s, transform 0.8s ease-out ${0.75 + index * 0.1}s`,
              }}
            >
              <div className="flex w-3/4 flex-col items-center md:items-start">
                <p
                  className="font-medium text-white text-center md:text-left"
                  style={{ fontSize: fonts.cardText }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#f7f6f5] py-14">
        {content}
      </div>
    );
  }

  return (
    <DotsScene
      dissipate
      morphSpeedMult={2}
      stiffnessMult={2}
      className="min-h-screen bg-[#f7f6f5] py-14"
    >
      {content}
    </DotsScene>
  );
}
