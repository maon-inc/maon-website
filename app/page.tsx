import Hook from "@/components/home/Hook";
import Problem from "@/components/home/Problem";
import Approach from "@/components/home/Approach";
import Vision from "@/components/home/Vision";
import DosDonts from "@/components/home/DosDonts";
import Footer from "@/components/ui/Footer";
import DotsCanvas from "@/components/motion/DotsCanvas";

export default function Home() {
  return (
    <DotsCanvas
      count={400}
      dotRadius={1.8}
      targetWidth={500}
      targetHeight={500}
      colorGray="#A1A1AA"
      colorAccent="#00A452"
      initialDurationMs={1500}
      transitionDurationMs={500}
      morphSpeed={0.15}
      mobileBreakpoint={768}
    >
      <main>
        <Hook />
        <Approach />
        <Problem />
        <DosDonts />
        <Vision />
        <Footer />
      </main>
    </DotsCanvas>
  );
}
