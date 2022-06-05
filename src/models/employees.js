const conn = require("./connect");
const config = require("../config");
const sql = require("mssql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAll = async () => {
  try {
    const db = await sql.connect(config.db);
    const result = await db.query`select * from employees_tb`;
    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};
const create = async (data) => {
  try {
    const hashPassword = await generatePassword(data.password);
    const db = await sql.connect(config.db);
    const checkUsername = await db.query`select * from employees_tb where emp_username = ${data.username}`;
    if (checkUsername.recordset.length > 0) {
      return {
        massage: "Username already exist",
      };
    } else {
    await db.query`insert into employees_tb (emp_fname, emp_lname, emp_sex, emp_status, emp_username, emp_password) values (${data.fname}, ${data.lname}, ${data.sex}, ${data.status}, ${data.username}, ${hashPassword} )`;
    return {massage: "insert successfuly"};
    }
  } catch (err) {
    console.log(err);
  }
};

const generatePassword = async (password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  return (passwordHashed = bcrypt.hash(password, salt));
};

const getOne = async (id) => {
  try {
    const db = await sql.connect(config.db);
    const result = await db.query`select * from employees_tb where emp_id = ${id}`;
    return result.recordset;
  } catch (err) {
    console.log(err);
  }
}
const update = async (data) => {
  try {
    const hashPassword = await generatePassword(data.password);
    const db = await sql.connect(config.db);
    const result = await db.query`update employees_tb set emp_fname = ${data.fname}, emp_lname = ${data.lname}, emp_sex = ${data.sex}, emp_status = ${data.status}, emp_username = ${data.username}, emp_password = ${hashPassword} where emp_id = ${data.id}`;
    return result
  }catch(err){

  }
}

const remove = async (id) =>{
  try{
    const db = await sql.connect(config.db);
    const result = await db.query`delete from employees_tb where emp_id = ${id}`;
    return result
  }catch(err){
    console.log(err)
  }
}

const login = async (data) => {
  try {
    const db = await sql.connect(config.db);
    const result = await db.query`select * from employees_tb where emp_username = ${data.username}`;
    const comparePassword = await bcrypt.compare(data.password, result.recordset[0].emp_password);
    if (comparePassword) {
      const token = await generateToken(result.recordset[0]);
      return {
        token,
        fname: result.recordset[0].emp_fname,
        lname: result.recordset[0].emp_lname,
        sex: result.recordset[0].emp_sex

      };
    } else {
      return {
        token: "",
        user: {massage:"Invalid username or password"},
      };
    }
  } catch (err) {
    console.log(err);
  }
}

const generateToken = async (data) => {
  const token = await jwt.sign(
    {
      id: data.emp_id,
      username: data.emp_username,
      status: data.emp_status,
    },
    config.secret,
    {
      expiresIn: "5m",
    }
  );
  return token;
}

module.exports = {
  getAll,
  create,
  getOne,
  update,
  remove,
  login,
};
