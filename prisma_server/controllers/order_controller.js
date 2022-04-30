const {
  getAllOrders,
  getUserOrders,
  generateOrder,
  fulfillOrder
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

const createOrder = async (req, res) => {
  try {
    const newOrder = await generateOrder(req);
    res.status(201).send(newOrder);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

//used to change the status of resolved
const update = async (req, res) => {
  try {
    const { id } = req.body;
    let order = await Prisma.order.update(
      { where: { id } },
      { data: { fulfilled: true, shippedAt: Date.now() } }
    );
    res.status(201).send(order);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

const findUserOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const userWithOrders = await Prisma.customer.findUnique({
      where: { id: +id },
      include: { orders: { include: { products: true } } }
    });
    const userOrders = userWithOrders.orders; // seems weird we can't do it in one shot
    res.status(200).send(userOrders);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

const saveBasket = async (req, res) => {
  try {
    const { id } = req.body;
    const user = await Prisma.customer.update({
      where: { id },
      data: { basket: { connect: req.body.basket } },
      include: { basket: true }
    }); // need to check the body object for exact prop name
    const userBasket = user.basket;
    res.status(201).send(userBasket);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

module.exports = {
  findAllOrders,
  createOrder,
  findUserOrders,
  update,
  saveBasket
};
