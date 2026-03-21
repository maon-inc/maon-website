import type { NextConfig } from "next";

const posthogHost = (
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com"
).replace(/\/+$/, "");
const posthogAssetsHost =
  process.env.NEXT_PUBLIC_POSTHOG_ASSETS_HOST ||
  (posthogHost.includes(".i.posthog.com")
    ? posthogHost.replace(/\/\/([^.]+)\./, "//$1-assets.")
    : posthogHost);

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: `${posthogAssetsHost}/static/:path*`,
      },
      {
        source: "/ingest/:path*",
        destination: `${posthogHost}/:path*`,
      },
    ];
  },
};

export default nextConfig;
