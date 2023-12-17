const express = require("express");
const router = express.Router();
const productRoutes = require('./product.js');
const cartRoutes = require('./cart.js');
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
module.exports = router;