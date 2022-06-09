const config = require("../config");
const sql = require("mssql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAll = async () => {
  try {
    const db = await sql.connect(config.db);
    const result =
      await db.query`select * from material_tb where material_type = 'ไม่ต้องคืน'`;
    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

const search = async (search, materialType) => {
  const searchData = "'%" + search + "%'";
  if (materialType === "all") {
    try {
      const db = await sql.connect(config.db);
      const result = await db
        .query(
          `select * from material_tb where material_name LIKE ${searchData}`
        )
        .then((result) => {
          return result.recordset;
        });
      return result;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      const db = await sql.connect(config.db);
      const result = await db
        .query(
          `select * from material_tb where material_name LIKE ${searchData} and material_type = '${materialType}'`
        )
        .then((result) => {
          return result.recordset;
        });
      return result;
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = {
  getAll,
  search,
};
