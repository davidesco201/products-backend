const productModel = require('../model/product/product');
const validator = require('../validators/validator');

const getProducts = () => {
    const products = productModel.readProducts();
    return products;
};
const getProductsByCategory = (category) => {
    if (!validator.isString(category)) {
        throw new Error('Category must be a string');
    }
    const products = productModel.readProducts();
    const filteredProducts = products.filter(product => product.category === category);
    return filteredProducts;
};

module.exports = { getProducts, getProductsByCategory };