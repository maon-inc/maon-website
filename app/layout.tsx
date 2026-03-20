import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/ui/Nav";
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import { PostHogEarlyBirdCancel } from "@/components/providers/PostHogEarlyBirdCancel";
import { ScrollDepthTracker } from "@/components/providers/ScrollDepthTracker";
import { ScrollProvider } from "@/components/providers/ScrollProvider";

export const metadata: Metadata = {
  title: "MAON | AI Therapist",
  description: "Maon uses your smartwatch biometrics to help you understand your mental health patterns. Get personalized insights from your Apple Watch data without diagnoses or labels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <PostHogProvider>
          <PostHogEarlyBirdCancel />
          <ScrollDepthTracker />
          <ScrollProvider>
            <ConvexClientProvider>
              <Nav />
              {children}
            </ConvexClientProvider>
          </ScrollProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
