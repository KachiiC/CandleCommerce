const Prisma = require('.');

const index = async (req, res) => {
  try {
    const allOrders = await Prisma.order.findMany();
    res.status(200);
    res.send(allOrders);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

const generate = async (req, res) => {
  console.log('order', req.body);
  try {
    const newOrder = await Prisma.order.create({ data: req.body });
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
    const { id } = req.body;
    const userOrders = await Prisma.customer.findUnique({
      where: { id },
      select: orders,
      include: { products: true }
    });
    res.status(200).send(userOrders);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

const saveBasket = async (req, res) => {
  try {
    const { id } = req.body;
    const userBasket = await Prisma.customer.update({
      where: { id },
      data: { basket: req.body.basket }
    }); // need to check the body object for exact prop name
    res.status(201).send(userBasket);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

module.exports = { index, generate, findUserOrders, update };
