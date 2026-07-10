import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "logo", title: "Logo", type: "image", options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
