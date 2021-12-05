const shipments = {
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
                "parameters": {
                    "type": "array",
                    "items": [
                        {
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
                        {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "in": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "type"
                                    ]
                                }
                            },
                            "required": [
                                "name",
                                "in",
                                "description",
                                "schema"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "in": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "type"
                                    ]
                                }
                            },
                            "required": [
                                "name",
                                "in",
                                "description",
                                "schema"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "in": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "type"
                                    ]
                                }
                            },
                            "required": [
                                "name",
                                "in",
                                "description",
                                "schema"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "in": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "type"
                                    ]
                                }
                            },
                            "required": [
                                "name",
                                "in",
                                "description",
                                "schema"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "name": {
                                    "type": "string"
                                },
                                "in": {
                                    "type": "string"
                                },
                                "description": {
                                    "type": "string"
                                },
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "type"
                                    ]
                                }
                            },
                            "required": [
                                "name",
                                "in",
                                "description",
                                "schema"
                            ]
                        }
                    ]
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
                                                        "description": {
                                                            "type": "string"
                                                        },
                                                        "items": {
                                                            "type": "object",
                                                            "properties": {
                                                                "$ref": {
                                                                    "type": "string"
                                                                }
                                                            },
                                                            "required": [
                                                                "$ref"
                                                            ]
                                                        }
                                                    },
                                                    "required": [
                                                        "type",
                                                        "description",
                                                        "items"
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
                        "400": {
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
                                                "examples": {
                                                    "type": "object",
                                                    "properties": {
                                                        "error1": {
                                                            "type": "object",
                                                            "properties": {
                                                                "summary": {
                                                                    "type": "string"
                                                                },
                                                                "value": {
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
                                                                "summary",
                                                                "value"
                                                            ]
                                                        },
                                                        "error2": {
                                                            "type": "object",
                                                            "properties": {
                                                                "summary": {
                                                                    "type": "string"
                                                                },
                                                                "value": {
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
                                                                "summary",
                                                                "value"
                                                            ]
                                                        },
                                                        "error3": {
                                                            "type": "object",
                                                            "properties": {
                                                                "summary": {
                                                                    "type": "string"
                                                                },
                                                                "value": {
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
                                                                "summary",
                                                                "value"
                                                            ]
                                                        },
                                                        "error4": {
                                                            "type": "object",
                                                            "properties": {
                                                                "summary": {
                                                                    "type": "string"
                                                                },
                                                                "value": {
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
                                                                "summary",
                                                                "value"
                                                            ]
                                                        },
                                                        "error": {
                                                            "type": "object",
                                                            "properties": {
                                                                "summary": {
                                                                    "type": "string"
                                                                },
                                                                "value": {
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
                                                                "summary",
                                                                "value"
                                                            ]
                                                        }
                                                    },
                                                    "required": [
                                                        "error1",
                                                        "error2",
                                                        "error3",
                                                        "error4",
                                                        "error"
                                                    ]
                                                }
                                            },
                                            "required": [
                                                "schema",
                                                "examples"
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
                        "404": {
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
                                                "examples": {
                                                    "type": "object",
                                                    "properties": {
                                                        "error": {
                                                            "type": "object",
                                                            "properties": {
                                                                "summary": {
                                                                    "type": "string"
                                                                },
                                                                "value": {
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
                                                                "summary",
                                                                "value"
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
                                                "examples"
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
                        "400",
                        "401",
                        "404",
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
                "parameters",
                "responses",
                "security"
            ]
        }
    },
    "required": [
        "get"
    ]
}

module.exports = shipments;