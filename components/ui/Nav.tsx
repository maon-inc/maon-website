"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV, SITE, FONT_SIZES, FONTS, COLORS } from "@/lib/constants";
import { useScrollContext } from "@/components/providers/ScrollProvider";

export default function Nav() {
  const { isHookPassed } = useScrollContext();
  return (
    <>
      {/* Logo nav - absolute positioned */}
      <nav className="absolute left-0 right-0 top-0 z-50 mx-auto flex max-w-[80%] items-center justify-between py-6 md:max-w-none md:mx-0 md:px-20">
        {/* Logo with hover tooltip */}
        <div className="group relative">
          <Link href="/">
            <Image src="/logo.svg" alt={SITE.name} width={100} height={32} />
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
        className="fixed top-6 right-6 md:right-20 z-50 hidden md:inline-flex w-fit items-center justify-center gap-1.5 px-3 py-1.5 font-medium text-[#1b1b1b] hover:opacity-90"
        style={{
          fontSize: FONT_SIZES.navLink,
          border: "0.8px solid black",
          borderRadius: "8px",
          backgroundColor: "#B7D7A8",
          opacity: isHookPassed ? 1 : 0,
          pointerEvents: isHookPassed ? "auto" : "none",
          transition: "opacity 0.3s ease-out",
        }}
      >
        waitlist
        <Image
          src="/assets/ui/solar_arrow-up-broken.svg"
          alt=""
          width={14}
          height={14}
          className="h-3.5 w-3.5"
        />
      </Link>
    </>
  );
}
