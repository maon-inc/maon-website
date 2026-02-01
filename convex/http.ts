import { httpRouter } from "convex/server";
import { components, internal } from "./_generated/api";
import { registerRoutes } from "@convex-dev/stripe";
import type Stripe from "stripe";

const http = httpRouter();

// Register Stripe webhook handler at /stripe/webhook
registerRoutes(http, components.stripe, {
  webhookPath: "/stripe/webhook",
  events: {
    "checkout.session.completed": async (ctx, event: Stripe.CheckoutSessionCompletedEvent) => {
      const session = event.data.object;

      // Check if this is an early bird checkout
      if (session.metadata?.type === "early_bird" && session.payment_status === "paid") {
        await ctx.runMutation(internal.earlyBirds.createFromCheckout, {
          email: session.customer_details?.email || "",
          name: session.customer_details?.name || undefined,
          stripeCustomerId: session.customer as string,
          stripePaymentIntentId: session.payment_intent as string | undefined,
          stripeCheckoutSessionId: session.id,
          amountPaid: session.amount_total || 0,
          currency: session.currency || "usd",
          status: "paid",
        });
      }
    },
  },
});

export default http;