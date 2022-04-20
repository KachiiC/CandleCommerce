const { Product } = require('../models/products')

async function index (req, res) {
  try {
    const allProducts = await Product.find();
    res.status(200);
    res.send(allProducts);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

async function create (req, res) {
  try {
    const {pic_one, pic_two, price, description, title, colours} = req.body;
    const newProduct = await Product.create({pic_one, pic_two, price, description, title, colours});
    res.status(201);
    res.send(newProduct)
  } catch (err) {
    console.error(err);
    res.status(400);
  }
}

module.exports = { index, create }