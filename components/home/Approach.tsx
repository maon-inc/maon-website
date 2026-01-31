import { APPROACH, FONT_SIZES } from "@/lib/constants";
import DotsScene from "@/components/motion/DotsScene";

export default function Approach() {
  return (
    <DotsScene
      dissipate
      morphSpeedMult={2}
      stiffnessMult={2}
      className="min-h-screen bg-[#f7f6f5] px-20 py-28"
    >
      <p className="mt-20 font-semibold text-[#8d8d8d]" style={{ fontSize: FONT_SIZES.label }}>{APPROACH.label}</p>

      <h2 className="pt-40 max-w-5xl font-medium leading-tight text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.mainHeading }}>
        {APPROACH.headline}
      </h2>

      <div className="mt-14 grid grid-cols-2 gap-10">
        {/* Card 1: Listen to your body */}
        <div className="flex h-56 items-center gap-8 rounded-[20px] bg-white px-10">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="size-8 rounded-full bg-[#1b1b1b]"
              />
            ))}
          </div>
          <p className="font-medium text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.cardText }}>
            {APPROACH.cards[0].title}
          </p>
        </div>

        {/* Card 2: Identify emotional patterns */}
        <div className="flex h-56 items-center gap-8 rounded-[20px] bg-white px-10">
          <div className="grid grid-cols-3 gap-2">
            <div className="size-8 rounded-full bg-[#91ef81]" />
            <div className="size-8 rounded-full bg-[#91ef81]" />
            <div className="size-8 rounded-full bg-[#1b1b1b]" />
            <div className="size-8 rounded-full bg-[#1b1b1b]" />
            <div className="size-8 rounded-full bg-[#91ef81]" />
            <div className="size-8 rounded-full bg-[#91ef81]" />
          </div>
          <p className="font-medium text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.cardText }}>
            {APPROACH.cards[1].title}
          </p>
        </div>

        {/* Card 3: Step in when it matters */}
        <div className="flex h-56 items-center gap-8 rounded-[20px] bg-white px-10">
          <div className="relative h-20 w-28">
            <div className="absolute left-0 top-0 size-8 rounded-full bg-[#1b1b1b]" />
            <div className="absolute left-9 top-0 size-8 rounded-full bg-[#91ef81]/50" />
            <div className="absolute left-[4.5rem] top-0 size-8 rounded-full bg-[#91ef81]" />
            <div className="absolute left-3 top-10 size-8 rounded-full bg-[#1b1b1b]" />
            <div className="absolute left-12 top-10 size-8 rounded-full bg-[#91ef81]/50" />
          </div>
          <p className="font-medium text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.cardText }}>
            {APPROACH.cards[2].title}
          </p>
        </div>

        {/* Card 4: Show you the bigger picture */}
        <div className="flex h-56 items-center gap-8 rounded-[20px] bg-white px-10">
          <div className="size-24 rounded-full bg-[#91ef81]" />
          <p className="font-medium text-[#1b1b1b]" style={{ fontSize: FONT_SIZES.cardText }}>
            {APPROACH.cards[3].title}
          </p>
        </div>
      </div>
    </DotsScene>
  );
}
