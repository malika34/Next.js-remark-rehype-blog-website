import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: "blogPost",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "title",
      validation: (Rule: any) => Rule.required(),
    }),
    // Slug page
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "postParagrah",
      type: "text",
      title: "Paragraph",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
      ],
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      to: [
        {
          type: "author",
        },
      ],
    }),
  ],
});
