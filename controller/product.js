const productService = require('../service/product');

const getProducts = (req, res, next) => {
    try {
        const products = productService.getProducts();
        if (products.length === 0) {
            res.status(404).json({ error: 'No products found' });
        }
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getProductsByCategory = (req, res, next) => {
    try {
        const category = req.params.category;
        if (!category) {
            return res.status(400).json({ error: 'Category is required' });
        }
        const products = productService.getProductsByCategory(category);

        if (products.length === 0) {
            res.status(404).json({ error: 'No products found for the given category' });
        } else {
            res.json(products);
        }
    } catch (error) {
        if (error.message) {
            res.status(400).json({ error: error.message});
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};
module.exports = { getProducts, getProductsByCategory };