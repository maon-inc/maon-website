"use client";

import { useRef, useEffect, useState } from "react";
import { PROBLEM, FONT_SIZES, FONT_SIZES_MOBILE } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";
import { useIsMobile } from "@/hooks/useIsMobile";

export default function Problem() {
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
      scrollStartOffset={-500}
      className="py-20"
    >
      <div ref={sectionRef} className="mx-auto max-w-[90%] md:max-w-none md:mx-0 md:px-20">
      {/* Card container - z-20 to appear above dots canvas */}
      <div className="relative z-20 overflow-hidden rounded-[32px] border border-black/10 px-8 py-10 md:px-16 md:py-16">
        {/* Decorative green dots with falling animation */}
        {/* <div className="absolute right-16 top-0 flex flex-col items-end gap-6">
          {Array.from({ length: 20 }, (_, i) => i).map((i) => (
            <div
              key={i}
              className={`h-10 w-10 rounded-full bg-[#B7D7A8] ${i % 2 === 1 ? "mr-8" : ""}`}
              style={{
                transform: isVisible ? "translateY(1000px)" : "translateY(-1500px)",
                transition: `transform 4s cubic-bezier(0.45, 0, 0.55, 1) ${i * 0.25}s`,
              }}
            />
          ))}
        </div> */}

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          {/* Label */}
          <p
            className="font-bold text-[#1b1b1b]"
            style={{
              fontSize: fonts.label,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            {PROBLEM.label}
          </p>

          {/* Main statement */}
          <h2
            className="mt-20 w-full md:w-[75%] font-medium leading-tight text-[#1b1b1b]"
            style={{
              fontSize: fonts.mainHeading,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
            }}
          >
            {PROBLEM.headline}
          </h2>
        </div>

        {/* Quote section - outside max-w-4xl for wider border */}
        <div
          className="relative z-10 mt-32 rounded-2xl border-2 md:border border-black/10 p-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s",
          }}
        >
          {/* Quote marks */}
          <svg
            width="72"
            height="54"
            viewBox="0 0 72 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-10 w-10 h-auto md:w-[72px]"
          >
            <path
              d="M0 54V36C0 29.6 1.2 23.9 3.6 18.9C6.13333 13.7667 9.53333 9.53333 13.8 6.2C18.0667 2.73333 22.8667 0.466667 28.2 -0.600001L30.6 6.2C25.5333 7.8 21.4667 10.5333 18.4 14.4C15.4667 18.2667 14 22.6 14 27.4V28.2H28.2V54H0ZM41.8 54V36C41.8 29.6 43 23.9 45.4 18.9C47.9333 13.7667 51.3333 9.53333 55.6 6.2C59.8667 2.73333 64.6667 0.466667 70 -0.600001L72.4 6.2C67.3333 7.8 63.2667 10.5333 60.2 14.4C57.2667 18.2667 55.8 22.6 55.8 27.4V28.2H70V54H41.8Z"
              fill="#B7D7A8"
            />
          </svg>

          {/* Quote text */}
          <p className="font-medium w-full md:w-[80%] leading-tight text-[#1b1b1b] text-[24px] md:text-[35px]">
            {PROBLEM.quote.text}
          </p>

          {/* Attribution */}
          <p className="mt-10 text-[16px] md:text-[20px] font-medium text-[#1b1b1b]">
            {PROBLEM.quote.attribution}
          </p>
        </div>
      </div>
      </div>
    </DotsScene>
  );
}
