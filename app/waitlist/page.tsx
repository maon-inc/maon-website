"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/ui/Footer";
import { Id } from "@/convex/_generated/dataModel";
import { usePostHog } from "posthog-js/react";

// Dynamically import components that use Convex hooks to prevent SSR issues
const DeviceSelect = dynamic(() => import("@/components/waitlist/DeviceSelect"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center">
      <h2 className="font-semibold text-[#1b1b1b] text-center md:text-left w-full text-[30px] md:text-[60px]">
        Select your device
      </h2>
    </div>
  ),
});

const WaitlistForm = dynamic(() => import("@/components/waitlist/WaitlistForm"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
});

export default function WaitlistPage() {
  const [waitlistId, setWaitlistId] = useState<Id<"waitlist"> | null>(null);
  const [showForm, setShowForm] = useState(false);
  const posthog = usePostHog();
  const capturedStepsRef = useRef({ device: false, form: false });

  const handleDeviceSelect = (id: Id<"waitlist"> | undefined) => {
    if (id) {
      setWaitlistId(id);
    }
    setShowForm(true);
  };

  useEffect(() => {
    if (!posthog) return;

    if (showForm && !capturedStepsRef.current.form) {
      posthog.capture("waitlist_step_viewed", {
        step: "form",
        waitlist_id: waitlistId ?? undefined,
      });
      capturedStepsRef.current.form = true;
      return;
    }

    if (!showForm && !capturedStepsRef.current.device) {
      posthog.capture("waitlist_step_viewed", { step: "device_select" });
      capturedStepsRef.current.device = true;
    }
  }, [showForm, waitlistId, posthog]);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(to bottom, #F8EFFF 0%, #FFF9F0 100%)"
      }}
    >
      <div className="flex-1 flex items-center justify-center py-28">
        <div className="w-full max-w-[80%] md:max-w-3xl lg:max-w-4xl mx-auto">
          {showForm ? (
            <WaitlistForm waitlistId={waitlistId} />
          ) : (
            <DeviceSelect onDeviceSelect={handleDeviceSelect} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
