import { httpRouter } from "convex/server";
import { components, internal } from "./_generated/api";
import { registerRoutes } from "@convex-dev/stripe";
import type Stripe from "stripe";
import { Id } from "./_generated/dataModel";

const http = httpRouter();

const posthogApiKey = process.env.POSTHOG_API_KEY || process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogIngestHost =
  process.env.POSTHOG_HOST || process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

async function capturePostHogEvent(
  event: string,
  distinctId: string,
  properties: Record<string, unknown>
) {
  if (!posthogApiKey) return;

  const host = posthogIngestHost.replace(/\/+$/, "");
  try {
    await fetch(`${host}/i/v0/e`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        api_key: posthogApiKey,
        event,
        distinct_id: distinctId,
        properties,
      }),
    });
  } catch (error) {
    console.warn("PostHog capture failed:", error);
  }
}

// Register Stripe webhook handler at /stripe/webhook
registerRoutes(http, components.stripe, {
  webhookPath: "/stripe/webhook",
  events: {
    "checkout.session.completed": async (ctx, event: Stripe.CheckoutSessionCompletedEvent) => {
      const session = event.data.object;

      // Check if this is an early bird checkout
      if (session.metadata?.type === "early_bird" && session.payment_status === "paid") {
        const email = session.customer_details?.email || "";
        const waitlistId = session.metadata?.waitlistId || "";
        const emailDomain = email.includes("@") ? email.split("@")[1].toLowerCase() : undefined;

        // Create the early bird record
        await ctx.runMutation(internal.earlyBirds.createFromCheckout, {
          email,
          name: session.customer_details?.name || undefined,
          stripeCustomerId: typeof session.customer === "string" ? session.customer : undefined,
          stripePaymentIntentId: typeof session.payment_intent === "string" ? session.payment_intent : undefined,
          stripeCheckoutSessionId: session.id,
          amountPaid: session.amount_total || 0,
          currency: session.currency || "usd",
          status: "paid",
        });

        // If there's a waitlistId, update that waitlist entry with the email and mark as early bird
        if (waitlistId && email) {
          await ctx.runMutation(internal.waitlist.markAsEarlyBird, {
            waitlistId: waitlistId as Id<"waitlist">,
            email,
          });
        }

        const distinctId = waitlistId || session.id;
        await capturePostHogEvent("early_bird_purchase_success", distinctId, {
          waitlist_id: waitlistId || undefined,
          email_domain: emailDomain,
          amount_paid: session.amount_total || 0,
          currency: session.currency || "usd",
          stripe_checkout_session_id: session.id,
          stripe_payment_intent_id:
            typeof session.payment_intent === "string" ? session.payment_intent : undefined,
          stripe_customer_id: typeof session.customer === "string" ? session.customer : undefined,
        });
      }
    },
  },
});

export default http;
