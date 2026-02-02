"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { APPROACH, FONT_SIZES, FONT_SIZES_MOBILE } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Product() {
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-[85%]">
          {[1, 2, 3, 4].map((num, index) => (
            <div
              key={num}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.8s ease-out ${0.3 + index * 0.1}s, transform 0.8s ease-out ${0.3 + index * 0.1}s`,
              }}
            >
              <Image
                src={`/assets/product/${num}.svg`}
                alt={`Product feature ${num}`}
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </DotsScene>
  );
}
