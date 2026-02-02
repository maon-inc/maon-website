"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { APPROACH } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";

const PRODUCT_FEATURES = [1, 2, 3, 4];

export default function Product() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const fadeUpStyle = (delaySeconds: number = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.8s ease-out ${delaySeconds}s, transform 0.8s ease-out ${delaySeconds}s`,
  });

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
          className="mt-8 font-semibold text-[#8d8d8d] text-[12px] md:text-[15px]"
          style={fadeUpStyle()}
        >
          {APPROACH.label}
        </p>

        <h2
          className="pt-[30px] max-w-5xl whitespace-pre-line font-medium leading-tight text-[#1b1b1b] text-[32px] md:text-[35px] lg:text-[48px]"
          style={fadeUpStyle(0.15)}
        >
          {APPROACH.headline}
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full md:w-[85%]">
          {PRODUCT_FEATURES.map((num, index) => (
            <div
              key={num}
              style={fadeUpStyle(0.3 + index * 0.1)}
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
