const Fastify = require('fastify');
const routes = require('./routes');


const buildApp = (options = {}) =>{
    const app = Fastify(options);
    routes.userRoutes(app) 
    app.register(require("fastify-cors"), {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
      exposedHeaders: null,
      allowedHeaders: "*",
      maxAge: null,
      preflight: true,
      strictPreflight: true,
    });

    return app
}

module.exports = buildApp