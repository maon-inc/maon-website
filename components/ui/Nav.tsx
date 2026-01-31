import Link from "next/link";
import Image from "next/image";
import { NAV, SITE, FONT_SIZES } from "@/lib/constants";

export default function Nav() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-20 py-6">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-[#1b1b1b]">
        <span>MA</span>
        <span className="text-[#91ef81]">{SITE.logoHighlight}</span>
        <span>N</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8">
        {NAV.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-medium text-[#1b1b1b] transition-opacity hover:opacity-70"
            style={{ fontSize: FONT_SIZES.navLink }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={NAV.cta.href}
          className="inline-flex w-fit items-center justify-center gap-1.5 px-3 py-1.5 font-medium text-[#1b1b1b] transition-opacity hover:opacity-90"
          style={{
            fontSize: FONT_SIZES.navLink,
            border: "0.8px solid black",
            borderRadius: "8px",
            backgroundColor: "#91ef81",
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
      </div>
    </nav>
  );
}
