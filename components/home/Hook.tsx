"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HOOK, FONT_SIZES, FONT_SIZES_MOBILE, FONTS } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";
import DotsScene from "@/components/motion/DotsScene";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollContext } from "@/components/providers/ScrollProvider";

// Column 1 cards - in order
const COLUMN_1_CARDS = [
  { src: "/assets/hook/1.svg", alt: "Stress metrics" },
  { src: "/assets/hook/2.svg", alt: "Sleep metrics" },
  { src: "/assets/hook/3.svg", alt: "Mood metrics" },
  { src: "/assets/hook/4.svg", alt: "Screentime metrics" },
  { src: "/assets/hook/5.svg", alt: "Activity metrics" },
  { src: "/assets/hook/6.svg", alt: "Device selection" },
  { src: "/assets/hook/7.svg", alt: "Interventions metrics" },
  { src: "/assets/hook/8.svg", alt: "Calendar" },
];

// Column 2 cards - different order (offset by 4, creating interleaved feel)
const COLUMN_2_CARDS = [
  { src: "/assets/hook/5.svg", alt: "Activity metrics" },
  { src: "/assets/hook/6.svg", alt: "Device selection" },
  { src: "/assets/hook/7.svg", alt: "Interventions metrics" },
  { src: "/assets/hook/8.svg", alt: "Calendar" },
  { src: "/assets/hook/1.svg", alt: "Stress metrics" },
  { src: "/assets/hook/2.svg", alt: "Sleep metrics" },
  { src: "/assets/hook/3.svg", alt: "Mood metrics" },
  { src: "/assets/hook/4.svg", alt: "Screentime metrics" },
];

// Responsive sizing for Pinterest grid
const CARD_SIZES = {
  mobile: { cardWidth: 160, cardHeight: 104, gap: 16, maskRadius: 100 },
  md: { cardWidth: 200, cardHeight: 130, gap: 20, maskRadius: 130 },
  lg: { cardWidth: 240, cardHeight: 156, gap: 24, maskRadius: 160 },
  xl: { cardWidth: 280, cardHeight: 182, gap: 28, maskRadius: 180 },
};

type SizeKey = keyof typeof CARD_SIZES;

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
  const containerRef = useRef<HTMLDivElement>(null);
  const revealContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 }); // pixels
  const [isHovering, setIsHovering] = useState(false);
  const [isRecommendClicked, setIsRecommendClicked] = useState(false);
  const [isCard1Clicked, setIsCard1Clicked] = useState(false);
  const [isCard2Clicked, setIsCard2Clicked] = useState(false);
  const isMobile = useIsMobile();
  const fonts = isMobile ? FONT_SIZES_MOBILE : FONT_SIZES;
  const { setIsHookPassed } = useScrollContext();
  const breakpoint = useBreakpoint();
  const cardSize = CARD_SIZES[breakpoint];


  useEffect(() => {
    const el = isMobile ? mobileSectionRef.current : sectionRef.current;
    if (!el) return;

    return observeIntersection(
      el,
      (intersecting) => {
        if (intersecting) setIsVisible(true);
      },
      { threshold: 0 }
    );
  }, [isMobile]);

  // Track when the Hook section is scrolled past
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      // Hook is passed when its bottom edge is above the viewport
      setIsHookPassed(rect.bottom < 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsHookPassed]);

  // Handle mouse move for reveal effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = revealContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  // Calculate animation values
  const colHeight = (cardSize.cardHeight + cardSize.gap) * COLUMN_1_CARDS.length;
  const containerHeight = breakpoint === "xl" ? 500 : breakpoint === "lg" ? 420 : breakpoint === "md" ? 340 : 280;

  // Pinterest-style scrolling cards with hover reveal
  const pinterestCards = (
    <div
      ref={revealContainerRef}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        width: cardSize.cardWidth * 2 + cardSize.gap,
        height: containerHeight,
        cursor: "crosshair",
      }}
    >
      {/* Fade overlays */}
      <div
        className="absolute left-0 right-0 top-0 h-12 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #f7f6f5 0%, transparent 100%)" }}
      />
      <div
        className="absolute left-0 right-0 bottom-0 h-12 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, #f7f6f5 0%, transparent 100%)" }}
      />

      {/* Cards container with mask reveal */}
      <div
        className="flex"
        style={{
          gap: cardSize.gap,
          // Low opacity by default, higher when either card clicked or hovering
          opacity: isVisible ? (isCard1Clicked || isCard2Clicked ? 0.6 : 0.15) : 0,
          transition: "opacity 0.5s ease-out",
        }}
      >
        {/* Column 1 - scrolls down */}
        <div
          className="flex flex-col"
          style={{
            gap: cardSize.gap,
            width: cardSize.cardWidth,
            animation: isVisible ? "scrollDown 45s linear infinite" : "none",
          }}
        >
          {[...COLUMN_1_CARDS, ...COLUMN_1_CARDS].map((card, i) => (
            <div key={`${card.src}-${i}`} className="flex-shrink-0">
              <Image
                src={card.src}
                alt={card.alt}
                width={292}
                height={183}
                style={{
                  width: cardSize.cardWidth,
                  height: cardSize.cardHeight,
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08))",
                }}
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Column 2 - scrolls up */}
        <div
          className="flex flex-col"
          style={{
            gap: cardSize.gap,
            width: cardSize.cardWidth,
            marginTop: -(cardSize.cardHeight / 2),
            animation: isVisible ? "scrollUp 40s linear infinite" : "none",
          }}
        >
          {[...COLUMN_2_CARDS, ...COLUMN_2_CARDS].map((card, i) => (
            <div key={`${card.src}-${i}`} className="flex-shrink-0">
              <Image
                src={card.src}
                alt={card.alt}
                width={292}
                height={183}
                style={{
                  width: cardSize.cardWidth,
                  height: cardSize.cardHeight,
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08))",
                }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reveal layer - shows cards at full opacity where mouse hovers */}
      <div
        className="absolute inset-0 flex overflow-hidden pointer-events-none"
        style={{
          gap: cardSize.gap,
          opacity: isVisible && isHovering ? 1 : 0,
          transition: isHovering ? "none" : "opacity 0.3s ease-out",
          WebkitMaskImage: `radial-gradient(circle ${cardSize.maskRadius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${cardSize.maskRadius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 100%)`,
        }}
      >
        {/* Duplicated columns for reveal layer */}
        <div
          className="flex flex-col"
          style={{
            gap: cardSize.gap,
            width: cardSize.cardWidth,
            animation: isVisible ? "scrollDown 45s linear infinite" : "none",
          }}
        >
          {[...COLUMN_1_CARDS, ...COLUMN_1_CARDS].map((card, i) => (
            <div key={`reveal-${card.src}-${i}`} className="flex-shrink-0">
              <Image
                src={card.src}
                alt={card.alt}
                width={292}
                height={183}
                style={{
                  width: cardSize.cardWidth,
                  height: cardSize.cardHeight,
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08))",
                }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div
          className="flex flex-col"
          style={{
            gap: cardSize.gap,
            width: cardSize.cardWidth,
            marginTop: -(cardSize.cardHeight / 2),
            animation: isVisible ? "scrollUp 40s linear infinite" : "none",
          }}
        >
          {[...COLUMN_2_CARDS, ...COLUMN_2_CARDS].map((card, i) => (
            <div key={`reveal-${card.src}-${i}`} className="flex-shrink-0">
              <Image
                src={card.src}
                alt={card.alt}
                width={292}
                height={183}
                style={{
                  width: cardSize.cardWidth,
                  height: cardSize.cardHeight,
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08))",
                }}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes scrollDown {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${colHeight}px); }
        }
        @keyframes scrollUp {
          0% { transform: translateY(-${colHeight}px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );

  // Main image component with clickable "recommend providers" overlay
  // SVG viewBox is 436x720, button is at x=105.479, y=495, w=223, h=36
  const mainImageComponent = (
    <div className="relative pointer-events-auto">
      <Image
        src="/assets/hook/main.svg"
        alt="Dashboard metrics"
        width={600}
        height={400}
        className="w-[220px] md:w-[260px] lg:w-[320px] xl:w-[350px] h-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.8s ease-out 0.2s",
        }}
      />
      {/* Clickable overlay for "recommend providers" button */}
      <button
        onClick={() => setIsRecommendClicked(!isRecommendClicked)}
        className="absolute cursor-pointer transition-all rounded-full z-10"
        style={{
          // Position as percentage of SVG viewBox (436x720)
          left: "24.2%",
          top: "68.75%",
          width: "51.1%",
          height: "5%",
          backgroundColor: isRecommendClicked ? "rgba(247, 246, 245, 0.6)" : "transparent",
        }}
        aria-label="Recommend providers"
      />
      {/* Clickable overlay for trends chart (first card with 3-bar chart) */}
      <button
        onClick={() => setIsCard1Clicked(!isCard1Clicked)}
        className="absolute cursor-pointer transition-all rounded-2xl"
        style={{
          // Position as percentage of SVG viewBox (436x720)
          // First card: x=90.5, y=132.5, w=248.327, h=154.937
          left: "20.8%",
          top: "18.4%",
          width: "57%",
          height: "21.5%",
          backgroundColor: isCard1Clicked ? "rgba(183, 215, 168, 0.15)" : "transparent",
        }}
        aria-label="View trends"
      />
      {/* Clickable overlay for second card (below first card) */}
      <button
        onClick={() => setIsCard2Clicked(!isCard2Clicked)}
        className="absolute cursor-pointer transition-all rounded-2xl"
        style={{
          // Position as percentage of SVG viewBox (436x720)
          // Second card: x=90.9788, y=316.5, w=247, h=223
          left: "20.9%",
          top: "44%",
          width: "56.7%",
          height: "31%",
          backgroundColor: isCard2Clicked ? "rgba(183, 215, 168, 0.15)" : "transparent",
        }}
        aria-label="View metrics"
      />
    </div>
  );

  return (
    <div ref={containerRef}>
      <DotsScene
        dissipate
        morphSpeedMult={2}
        stiffnessMult={2}
        className="relative min-h-screen bg-[#f7f6f5]"
      >
      {/* Mobile layout: main image + text, cards in background */}
      <div className="md:hidden absolute inset-0 flex flex-col items-center justify-start px-6 pt-20">
        {/* Cards + Main image container - centered */}
        <div className="relative mb-20">
          {/* Pinterest cards - background */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
            {pinterestCards}
          </div>

          {/* Main image - centered on cards, foreground, pointer-events-none to allow hover on cards */}
          <div
            className="relative flex items-center justify-center pointer-events-none"
            style={{
              width: cardSize.cardWidth * 2 + cardSize.gap,
              height: containerHeight,
              zIndex: 10,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease-out 0.1s, transform 0.8s ease-out 0.1s",
            }}
          >
            {mainImageComponent}
          </div>
        </div>

        {/* Text content - below image on mobile */}
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

      {/* Desktop/tablet layout: text left, image right */}
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

      {/* Cards + Main image container - right side (tablet and desktop) */}
      <div
        className="hidden md:flex absolute top-1/2 md:right-[5%] lg:right-[8%] xl:right-[10%] items-center justify-center"
        style={{
          transform: "translateY(-50%)",
        }}
      >
        {/* Pinterest cards - background */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
          {pinterestCards}
        </div>

        {/* Main image - centered on cards, foreground, pointer-events-none to allow hover on cards */}
        <div
          className="relative flex items-center justify-center pointer-events-none"
          style={{
            width: cardSize.cardWidth * 2 + cardSize.gap,
            height: containerHeight,
            zIndex: 10,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
          }}
        >
          {mainImageComponent}
        </div>
      </div>
    </DotsScene>
    </div>
  );
}
