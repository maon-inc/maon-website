import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { FONTS } from "@/lib/constants";
import { PostHogSuccess } from "@/components/providers/PostHogSuccess";

export const metadata = {
  title: "Thank You | MAON",
  description: "Thank you for your early bird purchase",
};

export default function Success() {
  return (
    <main className="min-h-screen bg-[#f7f6f5] text-[#1b1b1b] flex flex-col">
      <PostHogSuccess />
      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-24">
        <div
          className="max-w-[600px] w-full bg-white p-8 md:p-12 rounded-xl border border-[#e5e5e5] text-center"
          style={{ fontFamily: FONTS.sans }}
        >
          <div className="mb-6">
            <svg
              className="w-16 h-16 mx-auto text-[#00A452]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Thank you for the purchase!
          </h1>

          <p className="text-[17px] text-[#1b1b1b] leading-relaxed mb-8">
            Email{" "}
            <a
              href="mailto:lks@maonhealth.com"
              className="text-[#00A452] hover:underline"
            >
              lks@maonhealth.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:at@maonhealth.com"
              className="text-[#00A452] hover:underline"
            >
              at@maonhealth.com
            </a>{" "}
            to schedule a meeting (we might reach out to you first)!
          </p>

          <Link
            href="/"
            className="inline-block px-6 py-3 bg-[#00A452] text-white font-semibold rounded-lg hover:bg-[#008c46] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
