"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HOOK, FONT_SIZES, FONT_SIZES_MOBILE, FONTS } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";
import { useIsMobile } from "@/hooks/useIsMobile";

// Card images split into two columns for Pinterest-style layout
const COLUMN_1_CARDS = [
  { src: "/assets/hook/1.svg", alt: "Stress metrics", width: 302, height: 195 },
  { src: "/assets/hook/3.svg", alt: "Mood metrics", width: 301, height: 195 },
  { src: "/assets/hook/5.svg", alt: "Activity metrics", width: 301, height: 195 },
  { src: "/assets/hook/7.svg", alt: "Interventions metrics", width: 301, height: 195 },
];

const COLUMN_2_CARDS = [
  { src: "/assets/hook/2.svg", alt: "Sleep metrics", width: 302, height: 195 },
  { src: "/assets/hook/4.svg", alt: "Screentime metrics", width: 302, height: 195 },
  { src: "/assets/hook/6.svg", alt: "Device selection", width: 300, height: 190 },
  { src: "/assets/hook/8.svg", alt: "Calendar", width: 301, height: 195 },
];

// Card dimensions for different breakpoints
const SIZES = {
  mobile: { cardWidth: 140, cardHeight: 95, gap: 10, columnGap: 10, visibleHeight: 220, offset: -30 },
  md: { cardWidth: 160, cardHeight: 110, gap: 12, columnGap: 12, visibleHeight: 280, offset: -40 },
  lg: { cardWidth: 200, cardHeight: 140, gap: 14, columnGap: 14, visibleHeight: 340, offset: -50 },
  xl: { cardWidth: 260, cardHeight: 180, gap: 16, columnGap: 16, visibleHeight: 420, offset: -60 },
};

type SizeKey = keyof typeof SIZES;

function useBreakpoint(): SizeKey {
  const [breakpoint, setBreakpoint] = useState<SizeKey>("mobile");

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1280) setBreakpoint("xl");
      else if (width >= 1024) setBreakpoint("lg");
      else if (width >= 768) setBreakpoint("md");
      else setBreakpoint("mobile");
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
}

export default function Hook() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  const fonts = isMobile ? FONT_SIZES_MOBILE : FONT_SIZES;
  const breakpoint = useBreakpoint();
  const size = SIZES[breakpoint];

  useEffect(() => {
    const el = breakpoint === "mobile" ? mobileSectionRef.current : sectionRef.current;
    if (!el) return;

    return observeIntersection(
      el,
      (intersecting) => {
        if (intersecting) setIsVisible(true);
      },
      { threshold: 0 }
    );
  }, [breakpoint]);

  // Render cards column
  const renderColumn = (cards: typeof COLUMN_1_CARDS, animationName: string, duration: string) => (
    <div
      className="flex flex-col"
      style={{
        gap: size.gap,
        animation: isVisible ? `${animationName} ${duration} linear infinite` : "none",
      }}
    >
      {/* Original cards */}
      {cards.map((card) => (
        <div key={card.src} className="flex-shrink-0">
          <Image
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            style={{ width: size.cardWidth, height: size.cardHeight }}
            className="object-contain"
          />
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {cards.map((card) => (
        <div key={`${card.src}-dup`} className="flex-shrink-0">
          <Image
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            style={{ width: size.cardWidth, height: size.cardHeight }}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );

  const cardsComponent = (
    <div
      className="flex overflow-hidden"
      style={{
        height: size.visibleHeight,
        width: size.cardWidth * 2 + size.columnGap,
        gap: size.columnGap,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease-out 0.2s",
      }}
    >
      {/* Drop shadow overlays on top and bottom edges */}
      <div
        className="absolute left-0 right-0 top-0 h-12 md:h-16 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(247,246,245,1) 0%, rgba(247,246,245,0) 100%)",
        }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 h-12 md:h-16 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(247,246,245,1) 0%, rgba(247,246,245,0) 100%)",
        }}
      />

      {/* Column 1 - scrolls down slowly */}
      <div className="flex flex-col" style={{ gap: size.gap, width: size.cardWidth }}>
        {renderColumn(COLUMN_1_CARDS, "scrollDown", "16s")}
      </div>

      {/* Column 2 - scrolls up, offset vertically for Pinterest effect */}
      <div
        className="flex flex-col"
        style={{ gap: size.gap, width: size.cardWidth, marginTop: size.offset }}
      >
        {renderColumn(COLUMN_2_CARDS, "scrollUp", "14s")}
      </div>

      {/* Keyframe animations for Pinterest-style scrolling */}
      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-${(size.cardHeight + size.gap) * COLUMN_1_CARDS.length}px));
          }
        }
        @keyframes scrollUp {
          0% {
            transform: translateY(calc(-${(size.cardHeight + size.gap) * COLUMN_2_CARDS.length}px));
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );

  return (
    <DotsScene
      dissipate
      morphSpeedMult={2}
      stiffnessMult={2}
      className="relative min-h-screen bg-[#f7f6f5]"
    >
      {/* Mobile layout: cards above, text below */}
      <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center px-6 pt-16">
        {/* Cards - centered above text on mobile */}
        <div
          className="relative mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.1s, transform 0.8s ease-out 0.1s",
          }}
        >
          {cardsComponent}
        </div>

        {/* Text content - below cards on mobile */}
        <div ref={mobileSectionRef} className="text-center">
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
            className="mt-4 font-medium text-[#8d8d8d] leading-tight"
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
            className="mt-6 inline-flex w-fit items-center justify-center gap-2 px-5 py-2.5 font-normal text-[#1b1b1b] transition-opacity hover:opacity-90"
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
      </div>

      {/* Desktop/tablet layout: text left, cards right */}
      {/* Text content - left side */}
      <div
        ref={sectionRef}
        className="hidden md:block absolute md:bottom-30 lg:bottom-55 left-0 right-0 mx-auto max-w-[80%] md:left-20 md:right-auto md:mx-0 md:max-w-[50%]"
      >
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

      {/* Dashboard cards - right side (tablet and desktop) */}
      <div
        className="hidden md:flex absolute right-6 lg:right-10 xl:right-16 top-1/2 overflow-hidden"
        style={{
          height: size.visibleHeight,
          width: size.cardWidth * 2 + size.columnGap,
          gap: size.columnGap,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(-50%)" : "translateY(calc(-50% + 40px))",
          transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
        }}
      >
        {/* Drop shadow overlays on top and bottom edges */}
        <div
          className="absolute left-0 right-0 top-0 h-12 md:h-16 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(247,246,245,1) 0%, rgba(247,246,245,0) 100%)",
          }}
        />
        <div
          className="absolute left-0 right-0 bottom-0 h-12 md:h-16 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(247,246,245,1) 0%, rgba(247,246,245,0) 100%)",
          }}
        />

        {/* Column 1 - scrolls down slowly */}
        <div className="flex flex-col" style={{ gap: size.gap, width: size.cardWidth }}>
          {renderColumn(COLUMN_1_CARDS, "scrollDown", "16s")}
        </div>

        {/* Column 2 - scrolls up, offset vertically for Pinterest effect */}
        <div
          className="flex flex-col"
          style={{ gap: size.gap, width: size.cardWidth, marginTop: size.offset }}
        >
          {renderColumn(COLUMN_2_CARDS, "scrollUp", "14s")}
        </div>
      </div>

      {/* Keyframe animations for Pinterest-style scrolling */}
      <style jsx>{`
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(-${(size.cardHeight + size.gap) * COLUMN_1_CARDS.length}px));
          }
        }
        @keyframes scrollUp {
          0% {
            transform: translateY(calc(-${(size.cardHeight + size.gap) * COLUMN_2_CARDS.length}px));
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </DotsScene>
  );
}
