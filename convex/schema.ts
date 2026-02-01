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
});
