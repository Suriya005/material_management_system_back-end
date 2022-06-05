const config = {
  secret: "secret",
  port: process.env.PORT || 3001,
  db: {
    user: process.env.DB_USER || "sa",
    password: process.env.DB_PWD || "admin",
    database: process.env.DB_NAME || "Material_System",
    server: "127.0.0.1",
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  db2: {
    user: process.env.DB_USER || "sa",
    password: process.env.DB_PWD || "admin",
    server: "127.0.0.1",
    database: process.env.DB_NAME || "Material_System",
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: false,
      trustServerCertificate: true,
      instancename: "SQLEXPRESS",
    },
  },
};

module.exports = config;
