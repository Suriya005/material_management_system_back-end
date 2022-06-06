const buildApp = require("./src/app");
const config = require("./src/config");

const startApp = async () => {
  const appOptions = {
    logger: true,
  };
  const app = buildApp(appOptions);
  try {
    await app.listen(config.port);
    console.log(`app is listening on port ${config.port}`);
  } catch (err) {
    throw err;
  }
};

startApp();
