const config = require("../config");
const sql = require("mssql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAll = async () => {
  try {
    const db = await sql.connect(config.db);
    const result = await db.query`select * from material_tb`;
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

const update = async (editData) => {
  try {
    const db = await sql.connect(config.db);
    const result =
      await db.query`update material_tb set material_name = ${editData.material_name}, material_type = ${editData.material_type}, material_unit = ${editData.material_unit}, material_qty = ${editData.material_qty} where material_id = ${editData.material_id}`;
    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

const remove = async (id) => {
  try {
    console.log("delete id: " + id);
    const db = await sql.connect(config.db);
    await db.query`delete from material_tb where material_id = ${id}`;
    return {
      massage: "delete successfuly",
    };
  } catch (err) {
    return {
      massage: "delete fail",
    };
  }
};

const createMaterial = async (data) => {
  // try {
  //   const db = await sql.connect(config.db);
  //   console.log(data.material_name);
  //   await db.query`insert into material_tb (material_name, material_type, material_unit, material_qty) values (${data.material_name}, ${data.material_type}, ${data.material_unit}, ${data.material_qty})`;
  //   return { massage: "create successfuly" };
  // } catch (err) {
  //   console.log(err);
  // }
  try {
    const db = await sql.connect(config.db);
    const result = await db.query`insert into material_tb (material_name, material_type, material_unit, material_qty) values (${data.material_name}, ${data.material_type}, ${data.material_unit}, ${data.material_qty})`;
    return result.recordset;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  search,
  update,
  remove,
  createMaterial,
};
