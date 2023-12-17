const cartModel = require('../model/cart/cart');
const productModel = require('../model/product/product');

const isProductAlreadyInCart = (cart, product_id) => {
  return cart.product_ids.includes(parseInt(product_id));
};

const getProductsDetails = (product_ids) => {
  const allProducts = productModel.readProducts();
  return allProducts.filter(product => product_ids.includes(product.id));
};

const addToCart = (product_id) => {
  if (isNaN(product_id)) {
    throw new Error('Product ID must be a number');
  }

  const cart = cartModel.readCart();

  if (isProductAlreadyInCart(cart, product_id)) {
    throw new Error('Product already exists in the cart');
  }

  cart.product_ids.push(parseInt(product_id));
  cartModel.writeCart(cart);
  return { message: `Product ${product_id} added to the cart` };
};

const getCart = () => {
  const cart = cartModel.readCart();
  const cartDetails = getProductsDetails(cart.product_ids);
  return { cart: cartDetails };
};

module.exports = { addToCart, getCart };