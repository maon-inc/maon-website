"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { APPROACH } from "@/lib/constants";
import { observeIntersection } from "@/motion/observe";

const PRODUCT_CARDS = [
  {
    icon: "/assets/product/producticon1.svg",
    title: "identify patterns",
    subtitle: "your body, reflection, and app usage tell a story. We help you understand it.",
    image: "/assets/product/productTrends.svg",
  },
  {
    icon: "/assets/product/producticon2.svg",
    title: "intervene",
    subtitle: "we don't stop at just telling you, we step in when it matters.",
    image: "/assets/product/productIntervene.svg",
  },
  {
    icon: "/assets/product/producticon3.svg",
    title: "talk to an AI therapist",
    subtitle: "have a conversation with Maon, like a trusted friend",
    image: "/assets/product/productTherapist.svg",
  },
  {
    icon: "/assets/product/producticon4.svg",
    title: "get more support",
    subtitle: "when you need more, we match you with the right therapist.",
    image: "/assets/product/productMarket.svg",
  },
];

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
    <div className="min-h-screen py-14">
      <div ref={sectionRef} className="mx-auto max-w-[90%] md:max-w-none md:px-20 flex flex-col items-center text-center">
        <h2
          className="pt-[30px] max-w-5xl whitespace-pre-line font-medium leading-tight text-[#1b1b1b] text-[24px] md:text-[30px] lg:text-[38px]"
          style={fadeUpStyle(0.15)}
        >
          {APPROACH.headline}
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full md:max-w-[75%]">
          {PRODUCT_CARDS.map((card, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(176, 107, 117, 0.13))",
                ...fadeUpStyle(0.3 + index * 0.1)
              }}
            >
              <Image
                src={card.icon}
                alt={card.title}
                width={60}
                height={60}
                className="mb-6"
              />
              <h3 className="text-black font-semibold text-2xl mb-3">
                {card.title}
              </h3>
              <p className="text-black/80 text-sm mb-8 max-w-md">
                {card.subtitle}
              </p>
              <Image
                src={card.image}
                alt={card.title}
                width={280}
                height={210}
                unoptimized
                className="w-[70%] h-auto rounded-xl"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
