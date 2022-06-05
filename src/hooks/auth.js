const jwt = require("jsonwebtoken");
const config = require("../config");



// // ตรวจสอบ token ของ Members
const validateToken = async (req, res) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("missing authorization header");
    }

    const token = authorization.split(" ")[1];

    console.log(jwt.decode(token));

  } catch (err) {
    res.statusCode = 401;
    throw err;
  }
};

// ตรวจสอบ token ของ Admin
const validateTokenAdmin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("missing authorization header");
    }
    // console.log('**************4444***********************')
    // console.log(authorization)
    // console.log("*************444************************");
    // const token = authorization.split(" ")[1];
    const token = authorization;
    const deToken = jwt.decode(token)
    console.log(deToken);
    if(deToken.status != 'A'){
      throw new Error("You haven't status Addmin");
    }
    next()
  } catch (err) {
    res.statusCode = 401;
    throw err;
  }
};

module.exports = {
  validateToken,
  validateTokenAdmin,
};