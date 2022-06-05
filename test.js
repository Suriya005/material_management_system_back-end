const sql = require("mssql");
// const config = require("./src/config");


const test = async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(sqlConfig);
    const result = await sql.query`select * from employees_tb`;
    console.log(result.recordset);
  } catch (err) {
    console.log(err);
  }
};
console.log("test");
test();
