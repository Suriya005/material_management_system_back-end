const controllers = require("./controllers");
const hooks = require("./hooks");

const userRoutes = (app) => {
    app.post("/api/v1/users", hooks.validate.createUser, controllers.employees.create);
    app.get("/api/v1/users", hooks.validate.optGetAllUsers, controllers.employees.getAll);
    app.get("/api/v1/users/:id", hooks.validate.getOneUser, controllers.employees.getOne);
    app.put("/api/v1/users", hooks.validate.updateUser, controllers.employees.updateUserById);
    app.put("/api/v1/users/admin", hooks.validate.updateUserByAdmin, controllers.employees.updateUserByAdmin);
    app.put("/api/v1/users/password", hooks.validate.changePassword, controllers.employees.changePassword);
    app.delete("/api/v1/users/:id", hooks.validate.delectUser, controllers.employees.remove);
    app.post("/api/v1/users/login",hooks.validate.login, controllers.employees.login);
}

module.exports = {userRoutes};