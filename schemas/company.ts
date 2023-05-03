export default {
  name: 'company',
  type: 'document',
  title: 'Company',
  fields: [
      {
          name: 'company',
          type: 'string',
          title: 'Company Name'
      },
      {
          name: 'image',
          type: 'image',
          title: 'image'
      },
      {
          name: 'description',
          type: 'text',
          title: 'description'
      }
  ]
}