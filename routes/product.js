const express = require('express'); 
const productRouter  = express.Router(); 
const productController = require('../controller/product'); 

productRouter.get('/', productController.getProducts);
productRouter.get('/:category', productController.getProductsByCategory);


module.exports = productRouter;