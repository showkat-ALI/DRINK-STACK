const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  Stock: {
    type: Number,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  subHead: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
