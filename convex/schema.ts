import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  manualSections: defineTable({
    slug: v.string(),
    title: v.string(),
    icon: v.string(),
    order: v.number(),
    paragraphs: v.array(v.string()),
    listItems: v.optional(v.array(v.string())),
    steps: v.optional(
      v.array(
        v.object({
          title: v.string(),
          body: v.string(),
        }),
      ),
    ),
    subsections: v.optional(
      v.array(
        v.object({
          title: v.string(),
          body: v.string(),
          listItems: v.optional(v.array(v.string())),
        }),
      ),
    ),
  }).index("by_order", ["order"]),

  cardEffects: defineTable({
    stage: v.number(),
    stageLabel: v.string(),
    color: v.string(),
    colorLabel: v.string(),
    attribute: v.string(),
    description: v.string(),
    order: v.number(),
  })
    .index("by_stage", ["stage", "order"])
    .index("by_order", ["order"]),
});
