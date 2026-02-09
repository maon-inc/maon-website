"use client";

import { useRef, useEffect, useState } from "react";
import { PROBLEM, FONT_SIZES, FONT_SIZES_MOBILE } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
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

  const fadeUpStyle = (delaySeconds: number = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.8s ease-out ${delaySeconds}s, transform 0.8s ease-out ${delaySeconds}s`,
  });

  return (
    <div className="min-h-screen py-14">
      <div ref={sectionRef} className="mx-auto max-w-[90%] md:max-w-none md:px-20 flex flex-col items-center justify-center text-center min-h-screen">
        <h2
          className="pt-[30px] max-w-5xl whitespace-pre-line font-medium leading-tight text-[#1b1b1b] text-[24px] md:text-[30px] lg:text-[38px]"
          style={fadeUpStyle(0.15)}
        >
          74% of U.S. adults want mental health addressed earlier and more proactively, rather than having to raise concerns themselves.
        </h2>

        {/* Circle visualization */}
        <div
          className="mt-14 grid grid-cols-10 gap-2 md:gap-3"
          style={fadeUpStyle(0.3)}
        >
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              className="w-6 h-6 md:w-7 md:h-7 rounded-full transition-colors duration-1000 ease-out"
              style={{
                backgroundColor: i < 74 && isVisible ? '#B06B75' : 'rgba(0, 0, 0, 0.15)',
                transitionDelay: isVisible ? `${i * 0.02}s` : '0s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
