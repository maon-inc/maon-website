import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  waitlist: defineTable({
    email: v.optional(v.string()),
    country: v.optional(v.string()),
    region: v.optional(v.string()),
    devicePicked: v.optional(v.string()),
    // _creationTime is automatically added by Convex
  }).index("by_email", ["email"]),

  earlyBirds: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    stripeCustomerId: v.string(),
    stripePaymentIntentId: v.optional(v.string()),
    stripeCheckoutSessionId: v.string(),
    amountPaid: v.number(), // in cents
    currency: v.string(),
    status: v.string(), // "paid", "pending", "failed"
    // _creationTime is automatically added by Convex
  })
    .index("by_email", ["email"])
    .index("by_stripeCheckoutSessionId", ["stripeCheckoutSessionId"]),
});
