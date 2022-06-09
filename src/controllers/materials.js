const materialModel = require("../models/materials");

const getAll = async (req, res) => {
  const result = await materialModel.getAll();
  res.send(result);
};

const search = async (req, res) => {
  console.log(req.body);
  const search = req.body.search;
  const materialType = req.body.materialType;
  const result = await materialModel.search(search, materialType);
  res.send(result);
}

module.exports = {
  getAll,
  search
};
