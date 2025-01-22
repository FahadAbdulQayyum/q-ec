export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Product Title',
        },
        {
            name: 'status',
            type: 'string',
            title: 'Status'
        },
        {
            name: 'color',
            type: 'string',
            title: 'Color'
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category'
        },
        {
            name: 'desc',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Product Price',
        },
        {
            name: 'pic',
            type: 'image',
            title: 'Service Image',
            options: {
                hotspot: true // Enables cropping and focal point selection
            }
        },
    ]
};
