import { defineArrayMember, defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "heroBadge", title: "Hero badge", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroTagline", title: "Hero tagline", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroDescription", title: "Hero description", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: "heroBackground", title: "Hero background", type: "image", options: { hotspot: true } }),
    defineField({ name: "googleReviewsUrl", title: "Google Reviews URL", type: "url", validation: (Rule) => Rule.uri({ scheme: ["https"] }) }),
    defineField({
      name: "reviews",
      title: "Google review cards",
      type: "array",
      validation: (Rule) => Rule.max(6),
      of: [defineArrayMember({
        name: "review",
        title: "Review",
        type: "object",
        fields: [
          defineField({ name: "author", title: "Reviewer name", type: "string", validation: (Rule) => Rule.required() }),
          defineField({ name: "initials", title: "Reviewer initials", type: "string", validation: (Rule) => Rule.max(3) }),
          defineField({ name: "text", title: "Review", type: "text", rows: 5, validation: (Rule) => Rule.required() }),
          defineField({ name: "rating", title: "Rating", type: "number", initialValue: 5, validation: (Rule) => Rule.required().min(1).max(5).integer() }),
        ],
      })],
    }),
  ],
  preview: { prepare: () => ({ title: "Homepage content" }) },
});
