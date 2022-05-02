const {
  getAllOrders,
  getUserOrders,
  updateOrder,
  generateOrder,
  shipOrder,
  deleteOrder
} = require('../models/order_model');

const findAllOrders = async (req, res) => {
  try {
    const allOrders = await getAllOrders();
    res.status(200).send(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

const findUserOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const userOrders = await getUserOrders(id);
    res.status(200).send(userOrders);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

const createOne = async (req, res) => {
  try {
    const newOrder = await generateOrder(req);
    res.status(201).send(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

//used to change the status of resolved
const updateOne = async (req, res) => {
  try {
    const updated = await updateOrder(req.body);
    res.status(200).send(updated);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

const shipOne = async (req, res) => {
  try {
    const shipped = await shipOrder(req.body);
    res.status(200).send(shipped);
  } catch (err) {
    res
      .status(500)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

const deleteOne = async (req, res) => {
  try {
    await deleteOrder(req.body);
    res.sendStatus(204);
  } catch (err) {
    res
      .status(500)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

module.exports = {
  findAllOrders,
  createOne,
  findUserOrders,
  updateOne,
  shipOne,
  deleteOne
};
