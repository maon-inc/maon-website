"use client";

import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useCountdown } from "@/hooks/useCountdown";
import { useMutation, useQuery, useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { observeIntersection } from "@/motion/observe";
import { usePostHog } from "posthog-js/react";

interface WaitlistFormProps {
  waitlistId: Id<"waitlist"> | null;
}

// Target date: 70 days from Feb 1, 2026 = April 12, 2026
const LAUNCH_DATE = new Date('2026-04-12T00:00:00Z');

export default function WaitlistForm({ waitlistId }: WaitlistFormProps) {
  const isMobile = useIsMobile();
  const { days, hours, minutes, seconds, isExpired } = useCountdown(LAUNCH_DATE);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const posthog = usePostHog();

  const createWaitlistEntry = useMutation(api.waitlist.create);
  const addEmail = useMutation(api.waitlist.addEmail);
  const createEarlyBirdCheckout = useAction(api.stripe.createEarlyBirdCheckout);
  const spotsRemaining = useQuery(api.earlyBirds.getSpotsRemaining);

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

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const getEmailDomain = (value: string) => {
    const atIndex = value.lastIndexOf("@");
    if (atIndex === -1) return undefined;
    return value.slice(atIndex + 1).toLowerCase();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) return;

    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      posthog?.capture("waitlist_error", { reason: "invalid_email" });
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      let id = waitlistId;
      if (!id) {
        id = await createWaitlistEntry({});
      }
      await addEmail({ id, email: trimmedEmail });
      setIsSubmitted(true);

      const emailDomain = getEmailDomain(trimmedEmail);
      const distinctId = String(id);
      posthog?.identify(distinctId, {
        waitlist_id: distinctId,
        email_domain: emailDomain,
      });
      posthog?.capture("waitlist_submitted", {
        waitlist_id: distinctId,
        email_domain: emailDomain,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      if (message.includes("already on the waitlist")) {
        setError("You're already on the waitlist!");
        posthog?.capture("waitlist_error", { reason: "already_on_waitlist" });
      } else {
        setError("Something went wrong. Please try again.");
        posthog?.capture("waitlist_error", { reason: "submit_failed" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEarlyBirdCheckout = async () => {
    setIsCheckoutLoading(true);
    try {
      posthog?.capture("early_bird_checkout_started", {
        waitlist_id: waitlistId ?? undefined,
        spots_remaining: spotsRemaining ?? undefined,
      });
      const { url } = await createEarlyBirdCheckout({
        waitlistId: waitlistId ?? undefined,
      });
      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Failed to start checkout. Please try again.");
      posthog?.capture("early_bird_checkout_failed", { reason: "checkout_failed" });
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  return (
    <div ref={sectionRef} className="flex flex-col items-center w-full">
      {/* Countdown */}
      <div
        className="text-center mb-8 md:mb-12"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <p
          className="text-black"
          style={{ fontSize: isMobile ? "18px" : "24px" }}
        >
          {isExpired ? "We have" : "Launch in"}
        </p>
        <p
          className="font-bold text-black mt-2"
          style={{ fontSize: isMobile ? "30px" : "48px" }}
        >
          {isExpired ? "Launched!" : `${days}d ${hours}h ${minutes}m ${seconds}s`}
        </p>
      </div>

      {/* Cards Container */}
      <div
        className="w-full flex gap-6"
        style={{
          flexDirection: isMobile ? "column" : "row",
          maxWidth: isMobile ? "100%" : "800px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease-out 0.15s, transform 0.8s ease-out 0.15s",
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
              disabled={isSubmitting || isSubmitted || error.includes("already on the waitlist")}
              className={`w-full font-medium rounded-[10px] mt-3 transition-opacity disabled:opacity-50 ${
                error.includes("already on the waitlist")
                  ? "bg-red-500 text-white"
                  : "bg-[#1b1b1b] text-[#f7f6f5] hover:opacity-90"
              }`}
              style={{
                fontSize: isMobile ? "14px" : "16px",
                height: isMobile ? "35px" : "46px",
              }}
            >
              {error.includes("already on the waitlist")
                ? "You're already on the waitlist!"
                : isSubmitted
                  ? "You're on the list!"
                  : isSubmitting
                    ? "Joining..."
                    : "join the waitlist"}
            </button>
            {error && !error.includes("already on the waitlist") && (
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
            <li>Full refund whenever until launch</li>
          </ul>

          <button
            onClick={handleEarlyBirdCheckout}
            disabled={isCheckoutLoading || spotsRemaining === 0}
            className="w-full bg-[#B7D7A8] text-[#1b1b1b] font-medium rounded-[10px] mt-6 hover:opacity-90 transition-opacity disabled:opacity-50"
            style={{
              fontSize: isMobile ? "14px" : "16px",
              height: isMobile ? "35px" : "46px",
            }}
          >
            {isCheckoutLoading ? "Loading..." : spotsRemaining === 0 ? "sold out" : "be an early bird"}
          </button>

{spotsRemaining !== undefined && spotsRemaining <= 75 && (
            <p
              className="text-center text-black font-medium mt-4"
              style={{ fontSize: isMobile ? "14px" : "16px" }}
            >
              {spotsRemaining} spots available for first batch
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
