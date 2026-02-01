import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    devicePicked: v.optional(v.string()),
    country: v.optional(v.string()),
    region: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("waitlist", {
      devicePicked: args.devicePicked,
      country: args.country,
      region: args.region,
    });
    return id;
  },
});

export const addEmail = mutation({
  args: {
    id: v.id("waitlist"),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const normalizedEmail = args.email.toLowerCase();

    // Check if this email already exists in the waitlist
    const existingEntry = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", normalizedEmail))
      .first();

    if (existingEntry) {
      // Get the new entry to retrieve its devicePicked
      const newEntry = await ctx.db.get(args.id);

      // Check if it's an exact duplicate (same email AND same device)
      const existingDevices = existingEntry.devicePicked?.split(", ") ?? [];
      const newDevice = newEntry?.devicePicked;

      if (!newDevice || existingDevices.includes(newDevice)) {
        // Delete the duplicate entry we just created
        await ctx.db.delete(args.id);
        throw new Error("You're already on the waitlist!");
      }

      // Different device - append the new device to existing devices
      const updatedDevices = existingEntry.devicePicked
        ? `${existingEntry.devicePicked}, ${newDevice}`
        : newDevice;

      await ctx.db.patch(existingEntry._id, {
        devicePicked: updatedDevices,
      });

      // Delete the duplicate entry we just created
      await ctx.db.delete(args.id);

      return { duplicate: true, id: existingEntry._id };
    }

    // No duplicate - just add the email to the new entry
    await ctx.db.patch(args.id, {
      email: normalizedEmail,
    });

    return { duplicate: false, id: args.id };
  },
});

export const getCount = query({
  args: {},
  handler: async (ctx) => {
    const allEntries = await ctx.db.query("waitlist").collect();
    return allEntries.length;
  },
});
