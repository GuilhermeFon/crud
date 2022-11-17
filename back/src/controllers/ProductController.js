const Product = require("../models/Product");

class ProductController {
  constructor(dao) {
    this.dao = dao;
  }

  // async index(req, res) {
  //   const product = await Product.find();
  //   return res.json(product)
  // }

  index = async (req, res) => {
    const products = await this.dao.find();
    return res.json(products);
  };

  create = async (req, res) => {
    const product = await this.dao.create(req.body);
    return res.status(201).json(product);
  };
}

module.exports = new ProductController(Product);
