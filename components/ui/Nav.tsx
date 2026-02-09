"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV, SITE, FONTS, COLORS } from "@/lib/constants";
import { useScrollContext } from "@/components/providers/ScrollProvider";
import { usePostHog } from "posthog-js/react";

export default function Nav() {
  const { isHookPassed, isVisionVisible } = useScrollContext();
  const posthog = usePostHog();

  const handleWaitlistClick = () => {
    posthog?.capture("waitlist_cta_click", { location: "nav_fixed" });
  };

  const showButton = isHookPassed && !isVisionVisible;
  return (
    <>
      {/* Logo nav - absolute positioned */}
      <nav className="absolute left-0 right-0 top-0 z-50 mx-auto flex max-w-[80%] items-center justify-between py-6 md:max-w-none md:mx-0 md:px-20">
        {/* Logo with hover tooltip */}
        <div className="group relative">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt={SITE.name}
              width={100}
              height={32}
              className="w-[75px] md:w-[100px] h-auto"
            />
          </Link>

          {/* Tooltip */}
          <div
            className="pointer-events-none absolute left-0 top-full mt-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            style={{
              backgroundColor: COLORS.background.dark,
              borderRadius: "21px",
              boxShadow: "0px 2px 7.8px 0px rgba(0,0,0,0.25)",
              padding: "16px 20px",
              width: "280px",
            }}
          >
            <p
              className="text-white"
              style={{ fontFamily: FONTS.serif, fontSize: "14px" }}
            >
              <span>[</span>
              <span className="italic">mah-ohn</span>
              <span>]</span>
              <span className="font-bold ml-2">noun.</span>
            </p>
            <p
              className="text-white mt-2"
              style={{ fontFamily: FONTS.serif, fontSize: "14px", lineHeight: "1.4" }}
            >
              a dwelling or place of refuge - a safe home where one is held and protected.
            </p>
          </div>
        </div>
      </nav>

      {/* Fixed waitlist button - appears after Hook section */}
      <Link
        href={NAV.cta.href}
        onClick={handleWaitlistClick}
        className="fixed top-6 right-6 md:right-20 z-50 hidden md:inline-flex w-fit items-center justify-center px-5 py-2.5 font-normal text-white hover:opacity-90"
        style={{
          fontSize: "16px",
          borderRadius: "9999px",
          backgroundColor: "black",
          opacity: showButton ? 1 : 0,
          pointerEvents: showButton ? "auto" : "none",
          transition: "opacity 0.3s ease-out",
        }}
      >
        waitlist
      </Link>
    </>
  );
}
