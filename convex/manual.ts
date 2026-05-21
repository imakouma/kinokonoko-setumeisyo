import { query } from "./_generated/server";

export const listSections = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("manualSections")
      .withIndex("by_order")
      .collect();
  },
});

export const listCardEffects = query({
  args: {},
  handler: async (ctx) => {
    const effects = await ctx.db
      .query("cardEffects")
      .withIndex("by_order")
      .collect();
    return effects.sort((a, b) => a.stage - b.stage || a.order - b.order);
  },
});
