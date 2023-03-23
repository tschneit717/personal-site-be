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
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'tagline',
            type: 'string',
            title: 'Tagline'
        }),
        defineField({
            name: 'content',
            type: 'text',
            title: 'Content'
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