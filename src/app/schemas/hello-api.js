const hello_api = {
    "type": "object",
    "properties": {
        "get": {
            "type": "object",
            "properties": {
                "tags": {
                    "type": "array",
                    "items": [
                        {
                            "type": "string"
                        }
                    ]
                },
                "summary": {
                    "type": "string"
                },
                "responses": {
                    "type": "object",
                    "properties": {
                        "200": {
                            "type": "object",
                            "properties": {
                                "description": {
                                    "type": "string"
                                },
                                "content": {
                                    "type": "object",
                                    "properties": {
                                        "application/json": {
                                            "type": "object",
                                            "properties": {
                                                "schema": {
                                                    "type": "object",
                                                    "properties": {
                                                        "type": {
                                                            "type": "string"
                                                        },
                                                        "example": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "type",
                                                        "example"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "schema"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "application/json"
                                    ]
                                }
                            },
                            "required": [
                                "description",
                                "content"
                            ]
                        },
                        "401": {
                            "type": "object",
                            "properties": {
                                "description": {
                                    "type": "string"
                                },
                                "content": {
                                    "type": "object",
                                    "properties": {
                                        "application/json": {
                                            "type": "object",
                                            "properties": {
                                                "schema": {
                                                    "type": "object",
                                                    "properties": {
                                                        "$ref": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "$ref"
                                                    ]
                                                },
                                                "example": {
                                                    "type": "object",
                                                    "properties": {
                                                        "error": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "integer"
                                                                },
                                                                "message": {
                                                                    "type": "string"
                                                                }
                                                            },
                                                            "required": [
                                                                "code",
                                                                "message"
                                                            ]
                                                        }
                                                    },
                                                    "required": [
                                                        "error"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "schema",
                                                "example"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "application/json"
                                    ]
                                }
                            },
                            "required": [
                                "description",
                                "content"
                            ]
                        },
                        "500": {
                            "type": "object",
                            "properties": {
                                "description": {
                                    "type": "string"
                                },
                                "content": {
                                    "type": "object",
                                    "properties": {
                                        "application/json": {
                                            "type": "object",
                                            "properties": {
                                                "schema": {
                                                    "type": "object",
                                                    "properties": {
                                                        "$ref": {
                                                            "type": "string"
                                                        }
                                                    },
                                                    "required": [
                                                        "$ref"
                                                    ]
                                                },
                                                "example": {
                                                    "type": "object",
                                                    "properties": {
                                                        "error": {
                                                            "type": "object",
                                                            "properties": {
                                                                "code": {
                                                                    "type": "integer"
                                                                },
                                                                "message": {
                                                                    "type": "string"
                                                                }
                                                            },
                                                            "required": [
                                                                "code",
                                                                "message"
                                                            ]
                                                        }
                                                    },
                                                    "required": [
                                                        "error"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "schema",
                                                "example"
                                            ]
                                        }
                                    },
                                    "required": [
                                        "application/json"
                                    ]
                                }
                            },
                            "required": [
                                "description",
                                "content"
                            ]
                        }
                    },
                    "required": [
                        "200",
                        "401",
                        "500"
                    ]
                },
                "security": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "ApiKey": {
                                    "type": "array",
                                    "items": {}
                                }
                            },
                            "required": [
                                "ApiKey"
                            ]
                        }
                    ]
                }
            },
            "required": [
                "tags",
                "summary",
                "responses",
                "security"
            ]
        }
    },
    "required": [
        "get"
    ]
}

module.exports = hello_api;