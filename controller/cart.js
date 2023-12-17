const cartService = require('../service/cart');
const addToCart = (req, res, next) => {
    try {
        const product_id = req.body.product_id;
        const response = cartService.addToCart(product_id);
        res.json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCart = (req, res, next) => {
    try {
        const response = cartService.getCart();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { addToCart, getCart };
