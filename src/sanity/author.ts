import { defineType, defineField } from "sanity";

export const author = defineType({
  name: "author",
  type: "document",
  title: "Aurthor",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "publishDate",
      type: "date",
      title: "Date",
      validation: (Rule: any) =>
        Rule.required().error("Only numeric value allows!!"),
    }),
  ],
});
