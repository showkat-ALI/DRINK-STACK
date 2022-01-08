const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productController");
// get all products
// route /api/drinks
router.get("/", getProducts);
// get single products
// get product /api/drinks:id
router.get("/:id", getProductById);
module.exports = router;
