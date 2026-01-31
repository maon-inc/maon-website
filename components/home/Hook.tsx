import Link from "next/link";
import Image from "next/image";
import { HOOK, FONT_SIZES } from "@/lib/constants";
import DotsScene from "@/components/motion/DotsScene";

export default function Hook() {
  return (
    <DotsScene
      svgUrl="/assets/ui/hero.svg"
      targetScale={0.8}
      targetAnchor="right-center"
      morphSpeedMult={2}
      stiffnessMult={2}
      snapOnEnter
      className="relative min-h-screen bg-[#f7f6f5]"
    >
      <div className="absolute bottom-20 left-20 max-w-[50%]">
        <h1 className="font-semibold leading-tight text-[#1b1b1b]" style={{ fontFamily: "'Merriweather', serif", fontSize: FONT_SIZES.heroHeading }}>
          {HOOK.headline}
        </h1>

        <p className="mt-4 font-medium text-[#8d8d8d] w-[90%] leading-tight" style={{ fontSize: FONT_SIZES.subtitle }}>
          {HOOK.subtext}
        </p>

        <Link
          href={HOOK.cta.href}
          className="mt-8 inline-flex w-fit items-center justify-center gap-2 px-5 py-2.5 font-normal text-[#1b1b1b] transition-opacity hover:opacity-90"
          style={{
            fontSize: "16px",
            border: "0.9px solid black",
            borderRadius: "11.28px",
            backgroundColor: "#91ef81",
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
    </DotsScene>
  );
}
