const sql = require("mssql");
const config = require("../config");

const db = async () => {
  try {
    return await sql.connect(config.db);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  db
};
