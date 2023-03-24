export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
        {
            name: 'text',
            type: 'string',
            title: 'Text'
        },
        {
            name: 'socialLinks',
            type: "array",
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'socialLink' }
                    ]
                },
            ]
        }
    ]
}