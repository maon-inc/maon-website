"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/ui/Footer";
import { Id } from "@/convex/_generated/dataModel";

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

  const handleDeviceSelect = (id: Id<"waitlist"> | undefined) => {
    if (id) {
      setWaitlistId(id);
    }
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f5] flex flex-col">
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
