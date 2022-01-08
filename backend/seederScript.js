require("dotenv").config();
const productsData = require("./data/products");
const Product = require("./models/product");
const connectDB = require("./config/db");
connectDB();
const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("data inserted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
importData();
