import { httpRouter } from "convex/server";
import { components, internal } from "./_generated/api";
import { registerRoutes } from "@convex-dev/stripe";
import type Stripe from "stripe";
import { Id } from "./_generated/dataModel";

const http = httpRouter();

// Register Stripe webhook handler at /stripe/webhook
registerRoutes(http, components.stripe, {
  webhookPath: "/stripe/webhook",
  events: {
    "checkout.session.completed": async (ctx, event: Stripe.CheckoutSessionCompletedEvent) => {
      const session = event.data.object;

      // Check if this is an early bird checkout
      if (session.metadata?.type === "early_bird" && session.payment_status === "paid") {
        const email = session.customer_details?.email || "";

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
        const waitlistId = session.metadata?.waitlistId;
        if (waitlistId && email) {
          await ctx.runMutation(internal.waitlist.markAsEarlyBird, {
            waitlistId: waitlistId as Id<"waitlist">,
            email,
          });
        }
      }
    },
  },
});

export default http;