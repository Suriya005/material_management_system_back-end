const employeesModels = require("../models/employees");

const getAll = async (req, res) => {
  const result = await employeesModels.getAll();
  res.send(result);
};
const create = async (req, res) => {
  const result = await employeesModels.create(req.body);
  res.send(result);
};
const getOne = async (req, res) => {
  const result = await employeesModels.getOne(req.params.id);
  res.send(result);
};

const updateUserById = async (req, res) => {
  const result = await employeesModels.updateUserById(req.body);
  res.send(result);
};

const updateUserByAdmin = async (req, res) => {
  const result = await employeesModels.updateUserByAdmin(req.body);
  res.send(result);
};

const remove = async (req, res) => {
  const result = await employeesModels.remove(req.params.id);
  res.send(result);
};

const login = async (req, res) => {
  const result = await employeesModels.login(req.body);
  res.send(result);
};

const changePassword = async (req, res) => {
  const result = await employeesModels.changePassword(req.body);
  res.send(result);
};

const me = async (req, res) => {
  if (req.headers.authorization) {
    const result = await employeesModels.me(req.headers.authorization);
    res.send(result);
  } else {
    res.send({ massage: "Invalid token" });
  }
};



module.exports = {
  getAll,
  create,
  getOne,
  updateUserById,
  updateUserByAdmin,
  remove,
  login,
  changePassword,
  me,

};
