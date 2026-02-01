import { mutation, query, internalMutation } from "./_generated/server";
import { v } from "convex/values";

// Internal mutation to create an early bird record (called from webhook)
export const createFromCheckout = internalMutation({
  args: {
    email: v.string(),
    name: v.optional(v.string()),
    stripeCustomerId: v.string(),
    stripePaymentIntentId: v.optional(v.string()),
    stripeCheckoutSessionId: v.string(),
    amountPaid: v.number(),
    currency: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if already exists by checkout session ID
    const existing = await ctx.db
      .query("earlyBirds")
      .withIndex("by_stripeCheckoutSessionId", (q) =>
        q.eq("stripeCheckoutSessionId", args.stripeCheckoutSessionId)
      )
      .first();

    if (existing) {
      return existing._id;
    }

    return await ctx.db.insert("earlyBirds", args);
  },
});

// Query to get total early bird count
export const getCount = query({
  args: {},
  handler: async (ctx) => {
    const earlyBirds = await ctx.db.query("earlyBirds").collect();
    return earlyBirds.length;
  },
});

// Query to get spots remaining (out of 100)
export const getSpotsRemaining = query({
  args: {},
  handler: async (ctx) => {
    const earlyBirds = await ctx.db
      .query("earlyBirds")
      .filter((q) => q.eq(q.field("status"), "paid"))
      .collect();
    return Math.max(0, 100 - earlyBirds.length);
  },
});

// Query to check if an email is already an early bird
export const checkEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("earlyBirds")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
    return !!existing;
  },
});
