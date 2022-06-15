const jwt = require("jsonwebtoken");

// // ตรวจสอบ token ของ Members
const validateToken = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("missing authorization header");
    }
    const token = authorization.split(" ")[1];
    const deToken = jwt.decode(token);
    if(deToken == undefined){
      throw new Error("You haven't token");
    }
  } catch (err) {
    res.statusCode = 401;
    throw err;
  }
};

// ตรวจสอบ token ของ Admin
const validateTokenAdmin = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("missing authorization header");
    }
    const token = authorization.split(" ")[1];
    const deToken = jwt.decode(token);
    // console.log(deToken);
    if (deToken.status != "admin") {
      throw new Error("You haven't status Addmin");
    }
  } catch (err) {
    res.statusCode = 401;
    throw err;
  }
};

const validateTokenById = async (req, res) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error("missing authorization header");
    }
    const token = authorization.split(" ")[1];
    const deToken = jwt.decode(token);
    // console.log(deToken);
    if (deToken.id != req.body.id) {
      throw new Error("This ID is not your");
    } else {
      throw new Error("You haven't permission");
    }
  } catch (err) {
    res.statusCode = 401;
    throw err;
  }
};

module.exports = {
  validateToken,
  validateTokenAdmin,
  validateTokenById
};
