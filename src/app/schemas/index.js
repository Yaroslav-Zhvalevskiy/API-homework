const index = {
    type: 'object',
    properties: {
        type: {
            type: 'string'
        },
        properties: {
            type: 'object',
            properties: {
                error: {
                    type: 'object',
                    properties: {
                        type: {
                            type: 'string'
                        },
                        properties: {
                            type: 'object',
                            properties: {
                                code: {
                                    type: 'object',
                                    properties: {
                                        type: {
                                            type: 'string'
                                        }
                                    },
                                    required: [
                                        'type'
                                    ]
                                },
                                message: {
                                    type: 'object',
                                    properties: {
                                        type: {
                                            type: 'string'
                                        }
                                    },
                                    required: [
                                        'type'
                                    ]
                                }
                            },
                            required: [
                                'code',
                                'message'
                            ]
                        }
                    },
                    required: [
                        'type',
                        'properties'
                    ]
                }
            },
            required: [
                'error'
            ]
        }
    },
    required: [
        'type',
        'properties'
    ]
}

module.exports = index;