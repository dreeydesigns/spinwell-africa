import { defineField, defineType } from "sanity";

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Gallery item",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    defineField({ name: "alt", title: "Image description", type: "string", description: "Describe the image for visitors using screen readers.", validation: (Rule) => Rule.required() }),
    defineField({ name: "caption", title: "Caption", type: "string" }),
    defineField({ name: "order", title: "Display order", type: "number", initialValue: 0 }),
  ],
  preview: { select: { title: "title", media: "image" } },
});
