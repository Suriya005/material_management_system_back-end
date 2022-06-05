const employeesModels = require('../models/employees');

const getAll = async (req, res) => {
    const result = await employeesModels.getAll();
    res.send(result);
}
const create = async (req, res) => {
    const result = await employeesModels.create(req.body);
    res.send(result);
}
const getOne = async (req, res) => {
    const result = await employeesModels.getOne(req.params.id);
    res.send(result);
}

const update = async (req, res) => {
    const result = await employeesModels.update(req.body);
    res.send(result);
}

const remove = async (req, res) => {
    const result = await employeesModels.remove(req.params.id);
    res.send(result);
}

const login = async (req, res) => {
    const result = await employeesModels.login(req.body);
    res.send(result);
}

module.exports = {
    getAll,
    create,
    getOne,
    update,
    remove,
    login
}