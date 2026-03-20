import posthog from "posthog-js";

export function trackSectionViewed(section: string) {
  posthog.capture("section_viewed", { section });
}

export function trackCtaClick(ctaName: string, location: string) {
  posthog.capture("cta_clicked", { cta_name: ctaName, location });
}

export function trackScrollDepth(percent: number) {
  posthog.capture("scroll_depth_reached", { percent });
}

export function captureUtmParams() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
  const utmProps: Record<string, string> = {};

  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) utmProps[key] = value;
  }

  if (Object.keys(utmProps).length > 0) {
    posthog.register(utmProps);
  }
}

export function captureDeviceType(isMobile: boolean) {
  posthog.setPersonProperties({ device_type: isMobile ? "mobile" : "desktop" });
}
