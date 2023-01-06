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

  update = async (req, res) => {
    const {id} = req.params;
    const {name, manufacturing_date, perishable, expiration_date, price} =
      req.body;

    try {
      if (!name || !price || !manufactureDate || perishable === undefined) {
        throw new Error("Campos devem ser preenchidos");
      }

      if (expirationDate && manufactureDate) {
        const expiration = new Date(expirationDate);
        const manufacture = new Date(manufactureDate);

        if (manufacture.getTime() > expiration.getTime()) {
          throw new Error(
            "Data de fabricação não deve ser maior que data de validade"
          );
        }
      }

      const product = await Product.findByIdAndUpdate(
        id,
        {
          name,
          price,
          perishable,
          manufacturing_date: manufactureDate,
          expiration_date: expirationDate,
        },
        {
          new: true,
        }
      );

      res.status(200).send({product});
    } catch (error) {
      res.status(400).send({error: error.message});
    }
  };
}

module.exports = new ProductController(Product);
