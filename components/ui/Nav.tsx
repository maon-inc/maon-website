import Link from "next/link";
import Image from "next/image";
import { NAV, SITE, FONT_SIZES } from "@/lib/constants";

export default function Nav() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-50 mx-auto flex max-w-[80%] items-center justify-between py-6 md:max-w-none md:mx-0 md:px-20">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.svg" alt={SITE.name} width={100} height={32} />
      </Link>

      {/* Navigation Links */}
      <div className="hidden items-center gap-8 md:flex">
        {/* Navigation links - currently empty */}
        <Link
          href={NAV.cta.href}
          className="inline-flex w-fit items-center justify-center gap-1.5 px-3 py-1.5 font-medium text-[#1b1b1b] transition-opacity hover:opacity-90"
          style={{
            fontSize: FONT_SIZES.navLink,
            border: "0.8px solid black",
            borderRadius: "8px",
            backgroundColor: "#B7D7A8",
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
