const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'product.json');

const readProducts = () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeProducts = (products) => {
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2), 'utf8');
};

module.exports = { readProducts, writeProducts };
