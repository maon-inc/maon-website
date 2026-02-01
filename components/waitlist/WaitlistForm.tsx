"use client";

import { useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

interface WaitlistFormProps {
  waitlistId: Id<"waitlist">;
}

export default function WaitlistForm({ waitlistId }: WaitlistFormProps) {
  const isMobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const addEmail = useMutation(api.waitlist.addEmail);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setError("");

    try {
      await addEmail({ id: waitlistId, email: email.trim() });
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Countdown */}
      <div className="text-center mb-8 md:mb-12">
        <p
          className="text-black"
          style={{ fontSize: isMobile ? "18px" : "24px" }}
        >
          Launch in
        </p>
        <p
          className="font-bold text-black mt-2"
          style={{ fontSize: isMobile ? "30px" : "48px" }}
        >
          73d 20h 23m 20s
        </p>
      </div>

      {/* Cards Container */}
      <div
        className="w-full flex gap-6"
        style={{
          flexDirection: isMobile ? "column" : "row",
          maxWidth: isMobile ? "100%" : "800px",
        }}
      >
        {/* Waitlist Card */}
        <div
          className="bg-white flex-1 p-6"
          style={{ borderRadius: isMobile ? "20px" : "24px" }}
        >
          <p
            className="font-semibold text-black"
            style={{ fontSize: isMobile ? "14px" : "18px" }}
          >
            Waitlist
          </p>
          <p
            className="text-black mt-2"
            style={{ fontSize: isMobile ? "14px" : "16px" }}
          >
            We will notify you on launch + updates!
          </p>

          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              disabled={isSubmitted}
              className="w-full border border-[#1b1b1b] rounded-[10px] px-5 py-2 text-black placeholder:text-[#8d8d8d] outline-none"
              style={{ fontSize: isMobile ? "14px" : "16px", height: isMobile ? "33px" : "44px" }}
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full bg-[#1b1b1b] text-[#f7f6f5] font-medium rounded-[10px] mt-3 hover:opacity-90 transition-opacity disabled:opacity-50"
              style={{
                fontSize: isMobile ? "14px" : "16px",
                height: isMobile ? "35px" : "46px",
              }}
            >
              {isSubmitted ? "You're on the list!" : isSubmitting ? "Joining..." : "join the waitlist"}
            </button>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </form>
        </div>

        {/* Early Birds Card */}
        <div
          className="bg-white flex-1 p-6"
          style={{ borderRadius: isMobile ? "20px" : "24px" }}
        >
          <p
            className="font-semibold text-black"
            style={{ fontSize: isMobile ? "14px" : "18px" }}
          >
            Early Birds
          </p>
          <div className="flex items-center gap-2 mt-1">
            <p
              className="font-medium text-black line-through opacity-50"
              style={{ fontSize: isMobile ? "14px" : "16px" }}
            >
              $72
            </p>
            <p
              className="font-medium text-black"
              style={{ fontSize: isMobile ? "14px" : "16px" }}
            >
              $20
            </p>
          </div>

          <ul
            className="mt-4 space-y-2 list-disc pl-5 text-black"
            style={{ fontSize: isMobile ? "14px" : "16px" }}
          >
            <li>
              <span className="font-bold">6 months free</span> starting launch
            </li>
            <li>We will build features relevant to your needs</li>
            <li>Biweekly calls with a team member to identify your pain points</li>
            <li>full refund whenever</li>
          </ul>

          <button
            className="w-full bg-[#91ef81] text-[#1b1b1b] font-medium rounded-[10px] mt-6 hover:opacity-90 transition-opacity"
            style={{
              fontSize: isMobile ? "14px" : "16px",
              height: isMobile ? "35px" : "46px",
            }}
          >
            join the program
          </button>

          <p
            className="text-center text-black font-medium mt-4"
            style={{ fontSize: isMobile ? "14px" : "16px" }}
          >
            97/100 spots left
          </p>
        </div>
      </div>
    </div>
  );
}
