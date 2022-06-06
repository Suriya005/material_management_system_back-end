const validate = require("./auth");

const optGetAllUsers = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            emp_id: { type: "integer" },
            emp_fname: { type: "string" },
            emp_lname: { type: "string" },
            emp_sex: { type: "string" },
            emp_status: { type: "string" },
            emp_username: { type: "string" },
          },
        },
      },
    },
  },
  preHandler: validate.validateToken,
};

const createUser = {
  schema: {
    body: {
      type: "object",
      properties: {
        fname: { type: "string" },
        lname: { type: "string" },
        sex: { type: "string" },
        username: { type: "string" },
        password: { type: "string" },
      },
    },
  },
};

const login = {
  schema: {
    body: {
      type: "object",
      properties: {
        username: { type: "string" },
        password: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          token: { type: "string" },
          fname: { type: "string" },
          lname: { type: "string" },
          sex: { type: "string" },
          massage: { type: "string" },
        },
      },
    },
  },
};

const getOneUser = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "integer" },
      },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        massage: { type: "string" },
      },
    },
  },
};

const updateUser = {
  schema: {
    body: {
      type: "object",
      properties: {
        id: { type: "integer" },
        fname: { type: "string" },
        lname: { type: "string" },
        sex: { type: "string" },
        username: { type: "string" },
      },
    },
  },
  preHandler: validate.validateTokenById,
};

const updateUserByAdmin = {
  schema: {
    body: {
      type: "object",
      properties: {
        id: { type: "integer" },
        fname: { type: "string" },
        lname: { type: "string" },
        sex: { type: "string" },
        status: { type: "string" },
        username: { type: "string" },
      },
    },
  },
  preHandler: validate.validateTokenAdmin,
};

const changePassword = {
  schema: {
    body: {
      type: "object",
      properties: {
        id: { type: "integer" },
        oldPassword: { type: "string" },
        newPassword: { type: "string" },
      },
    },
    response: {
      200: {
        type: "object",
        properties: {
          massage: { type: "string" },
        },
      },
    },
  },
  preHandler: validate.validateTokenById,
};

const delectUser = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: { type: "integer" },
      },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        massage: { type: "string" },
      },
    },
  },
  preHandler: validate.validateTokenAdmin,
};

module.exports = {
  optGetAllUsers,
  createUser,
  login,
  getOneUser,
  updateUser,
  updateUserByAdmin,
  changePassword,
  delectUser,
};
