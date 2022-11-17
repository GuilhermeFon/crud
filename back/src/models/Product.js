const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    manufacturing_date: {
      type: Date,
      required: true,
    },
    perishable: {
      type: Boolean,
      required: true,
    },
    expiration_date: {
      type: Date,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model("products", ProductSchema);
