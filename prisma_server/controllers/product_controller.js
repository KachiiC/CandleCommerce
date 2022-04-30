const {
  returnAllWithColours,
  addOneWithColours,
  returnOneFull,
  returnSingleCombo,
  updateProduct
} = require('../models/product_model');

// TODO rename function
const findAll = async (req, res) => {
  try {
    const allProducts = await returnAllWithColours();
    res.status(200).send(allProducts);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

const findOneWithDetails = async (req, res) => {
  try {
    const product = await returnOneFull(req.params);
    res.status(200).send(product);
  } catch (error) {
    console.error(err);
    res.status(404).send({ err, message: 'Not found' });
  }
};

const findOneWithCombo = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await returnSingleCombo(id, req.body);
    res.status(201).send(product);
  } catch (err) {
    console.error(err);
    res.status(404).send({ err, message: 'Not found' });
  }
};

// TODO add controller for the admin to add a product
const addOne = async (req, res) => {
  try {
    const newProduct = await addOneWithColours(req.body);
    res.status(201).send(newProduct);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

const updateOne = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await updateProduct(id, req.body);
    res.status(200).send(updated);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

module.exports = {
  findAll,
  findOneWithCombo,
  findOneWithDetails,
  addOne,
  updateOne
};
