export default {
    name: 'job',
    type: 'document',
    title: 'Job',
    fields: [
        // {
        //     name: 'id',
        //     type: 'string',
        //     title: 'ID',
        // },
        {
            name: 'name',
            type: 'string',
            title: 'User Name',
        },
        {
            name: 'city_available',
            type: 'string',
            title: 'City Available',
        },
        // {
        //     name: 'pic_url',
        //     type: 'url',
        //     title: 'Picture URL',
        // },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
        {
            name: 'agent_choosen',
            type: 'boolean',
            title: 'Agent Chosen',
        },
        {
            name: 'time',
            type: 'string',
            title: 'User Time',
        }
        ,
        {
            name: 'selected_services_list',
            type: 'array',
            title: 'Services List',
            of: [
                {
                    type: 'object',
                    name: 'service',
                    title: 'Service',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Service Name',
                        },
                        {
                            name: 'variation',
                            type: 'string',
                            title: 'Variation'
                        },
                        {
                            name: 'city_available',
                            type: 'string',
                            title: 'City Available'
                        },
                        {
                            name: 'price',
                            type: 'number',
                            title: 'Service Price',
                        },
                        {
                            name: 'currently_offered',
                            type: 'boolean',
                            title: 'Currently Offered',
                        },
                        {
                            name: 'pic',
                            type: 'image',
                            title: 'Service Image',
                            options: {
                                hotspot: true // Enables cropping and focal point selection
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
