import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                //Change to schema title to automatically populate
                source: "title",
                slugify: (input) =>
                    input
                        .toLowerCase()
                        //Remove spaces
                        .replace(/\s+/g, "-")
                        //Remove special characters
                        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
            },
        }),
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'mobileTitle',
            type: 'string',
            title: 'Mobile Friendly Title'
        }),
        defineField({
            name: 'tagline',
            type: 'string',
            title: 'Tagline'
        }),
        defineField({
            name: 'accent',
            type: 'string',
            title: 'accent'
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                type: 'block'
                },
                {
                type: 'image'
                }
            ]
        }),
        defineField({
            name: 'uses',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'uses' }
                    ]
                }
            ],
            hidden: ({ document }): boolean => document?.title !== 'Uses'
        }),
        defineField({
            name: 'projects',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'project' }
                    ]
                }
            ],
            hidden: ({ document }): boolean => document?.title !== 'Work'
        })
    ]
})