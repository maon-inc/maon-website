"use client";

import { useState } from "react";
import DeviceSelect from "@/components/waitlist/DeviceSelect";
import WaitlistForm from "@/components/waitlist/WaitlistForm";
import Footer from "@/components/ui/Footer";
import { Id } from "@/convex/_generated/dataModel";

export default function WaitlistPage() {
  const [waitlistId, setWaitlistId] = useState<Id<"waitlist"> | null>(null);

  const handleDeviceSelect = (id: Id<"waitlist">) => {
    setWaitlistId(id);
  };

  return (
    <div className="min-h-screen bg-[#f7f6f5] flex flex-col">
      <div className="flex-1 flex items-center justify-center py-28">
        <div className="w-full max-w-[80%] md:max-w-3xl lg:max-w-4xl mx-auto">
          {waitlistId ? (
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
