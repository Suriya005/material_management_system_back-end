const validateToken = require("./auth");

const getAll = {
schema:{
    response: {
        200: {
            type: "object",
            properties: {
                massage: { type: "string" },
                data: { type: "array"}
            }
        }
    }
},
    preHandler: validateToken.validateTokenAdmin,
};

const search = {
    schema: {
        body: {
            type: "object",
            properties: {
                search: { type: "string" },
                materialType: { type: "string" },
            },
        },
        response: {
            200: {
                type: "object",
                properties: {
                    massage: { type: "string" },
                    data: { type: "array" }
                }
            }
        }
    },
    preHandler: validateToken.validateTokenAdmin,
}

const update = {
    schema: {
        body: {
            type: "object",
            properties: {
                editData:{type:"object"}
            }
        },
        response: {
            200: {
                type: "object",
                properties: {
                    massage: { type: "string" },
                    data: { type: "array" }
                }
            }
        }
    },
    preHandler: validateToken.validateTokenAdmin,
}

const remove = {
    schema: {
        params: {
            type: "object",
            properties: {
                id: { type: "integer" },
            }
        },
        response: {
            200: {
                type: "object",
                properties: {
                    massage: { type: "string" },
                }
            }
        }
    },
    preHandler: validateToken.validateTokenAdmin,
}

const createMaterial = {
    schema: {
        body: {
            type: "object",
            properties: {
                addData: { type: "object" },
            }
        },
        response: {
            200: {
                type: "object",
                properties: {
                    massage: { type: "string" },
                }
            }
        }
    },
    preHandler: validateToken.validateTokenAdmin,
}

module.exports = {
    getAll,
    search,
    update,
    remove,
    createMaterial
};
