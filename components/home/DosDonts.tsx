"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { DOS_DONTS, FONT_SIZES, FONT_SIZES_MOBILE } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import { useIsMobile } from "@/hooks/useIsMobile";
import { trackSectionViewed } from "@/lib/analytics";

export default function DosDonts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasCapturedSection = useRef(false);
  const isMobile = useIsMobile();
  const fonts = isMobile ? FONT_SIZES_MOBILE : FONT_SIZES;

  const doCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const dontCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [doCardHeight, setDoCardHeight] = useState<number | undefined>(undefined);
  const [dontCardHeight, setDontCardHeight] = useState<number | undefined>(undefined);

  const syncCardHeights = useCallback(() => {
    if (!isMobile) {
      setDoCardHeight(undefined);
      setDontCardHeight(undefined);
      return;
    }

    // Measure "do" cards
    const doHeights = doCardsRef.current
      .filter((el): el is HTMLDivElement => el !== null)
      .map((el) => {
        el.style.height = "auto";
        return el.scrollHeight;
      });
    if (doHeights.length > 0) {
      setDoCardHeight(Math.max(...doHeights));
    }

    // Measure "don't" cards
    const dontHeights = dontCardsRef.current
      .filter((el): el is HTMLDivElement => el !== null)
      .map((el) => {
        el.style.height = "auto";
        return el.scrollHeight;
      });
    if (dontHeights.length > 0) {
      setDontCardHeight(Math.max(...dontHeights));
    }
  }, [isMobile]);

  useEffect(() => {
    syncCardHeights();
    window.addEventListener("resize", syncCardHeights);
    return () => window.removeEventListener("resize", syncCardHeights);
  }, [syncCardHeights]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    return observeIntersection(
      el,
      (intersecting) => {
        if (intersecting) {
          setIsVisible(true);
          if (!hasCapturedSection.current) {
            trackSectionViewed("dos_donts");
            hasCapturedSection.current = true;
          }
        }
      },
      { threshold: 0 }
    );
  }, [isMobile]);

  const content = (
    <div ref={sectionRef} className="mx-auto max-w-[90%] md:max-w-none md:mx-0 md:px-20">
        {/* What we do section */}
        <p
          className="mt-8 font-semibold text-[#1b1b1b] text-center"
          style={{
            fontSize: "24px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
          }}
        >
          {DOS_DONTS.doSection.title}
        </p>

        <div className="mt-6 grid md:w-[80%] lg:w-[72%] grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
          {DOS_DONTS.doSection.cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => { doCardsRef.current[index] = el; }}
              className="flex min-h-[120px] items-center justify-center rounded-[20px] bg-[#7A7A7A] px-5 py-5 md:min-h-0 md:aspect-[1/1.2] md:px-0 md:pt-8 md:pb-0 lg:aspect-[1/1.1] xl:aspect-[1/.7]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.8s ease-out ${0.3 + index * 0.1}s, transform 0.8s ease-out ${0.3 + index * 0.1}s`,
                boxShadow: '0 6px 3px rgba(0, 0, 0, 0.20)',
                ...(isMobile && doCardHeight ? { height: doCardHeight } : {}),
              }}
            >
              <div className="flex w-full max-w-[256px] flex-row items-center justify-center gap-5 md:w-3/4 md:max-w-none md:flex-col md:items-center">
                <div className="flex w-12 shrink-0 justify-center">
                  <Image
                    src={card.icon}
                    alt={card.text}
                    width={0}
                    height={34}
                    style={{ width: "auto", height: 34 }}
                  />
                </div>
                <p
                  className="font-medium text-white text-center"
                  style={{ fontSize: `calc(${fonts.cardText} * 0.8)` }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* What we don't do section */}
        <p
          className="mt-14 font-semibold text-[#1b1b1b] text-center"
          style={{
            fontSize: "24px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s",
          }}
        >
          {DOS_DONTS.dontSection.title}
        </p>

        <div className="mt-6 grid md:w-[80%] lg:w-[72%] grid-cols-1 md:grid-cols-3 gap-5 mx-auto">
          {DOS_DONTS.dontSection.cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => { dontCardsRef.current[index] = el; }}
              className="flex min-h-[120px] items-center justify-center rounded-[20px] bg-[#7A7A7A]/24 px-5 py-5 md:min-h-0 md:aspect-[1/1.2] md:px-0 md:pt-11 md:pb-0 lg:aspect-[1/1.1] xl:aspect-[1/.7]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.8s ease-out ${0.75 + index * 0.1}s, transform 0.8s ease-out ${0.75 + index * 0.1}s`,
                ...(isMobile && dontCardHeight ? { height: dontCardHeight } : {}),
              }}
            >
              <div className="flex w-full max-w-[256px] flex-col items-center md:w-3/4 md:max-w-none">
                <p
                  className="font-medium text-[#1b1b1b] text-center"
                  style={{ fontSize: `calc(${fonts.cardText} * 0.8)` }}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );

  return (
    <div className="min-h-screen py-14">
      {content}
    </div>
  );
}
