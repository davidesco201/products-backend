const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controller/cart');

cartRouter.post('/', cartController.addToCart);
cartRouter.get('/', cartController.getCart);

module.exports = cartRouter;
