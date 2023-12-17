const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'cart.json');

const readCart = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { product_ids: [] };
  }
};

const writeCart = (cart) => {
  fs.writeFileSync(filePath, JSON.stringify(cart, null, 2), 'utf8');
};

module.exports = { readCart, writeCart };
