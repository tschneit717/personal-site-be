export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'technologies',
            type: 'text',
            title: 'Technologies',
        },
        {
            name: 'image',
            type: 'image',
            title: 'image'
        },
        {
            name: 'url',
            type: 'url',
            title: 'URL'
        }
    ]
}