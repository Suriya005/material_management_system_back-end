const controllers = require("./controllers");
const hooks = require("./hooks");

const userRoutes = (app) => {
    app.post("/api/v1/users", controllers.employees.create);
    app.get("/api/v1/users", controllers.employees.getAll);
    app.get("/api/v1/users/:id", controllers.employees.getOne);
    app.put("/api/v1/users", controllers.employees.update);
    app.delete("/api/v1/users/:id", controllers.employees.remove);
    app.post("/api/v1/users/login", controllers.employees.login);
}

module.exports = {userRoutes};