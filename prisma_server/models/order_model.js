const Prisma = require('.');

const getAllOrders = async () => {
  try {
    const allOrders = await Prisma.order.findMany();
    return allOrders;
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
};

const getUserOrders = async id => {
  try {
    const userWithOrders = await Prisma.customer.findUnique({
      where: { id: +id },
      include: { orders: { include: { products: true } } }
    });
    return userWithOrders.orders; // seems weird we can't do it in one shot (no include and select on the same level)
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
};

// TODO specify data to generate order to avoid injection
// TODO would it be better to update the user product field instead? Though I personally don't like the idea
const generateOrder = async req => {
  try {
    const { products, total_price, custId } = req.body;
    const newOrder = await Prisma.order.create({
      data: {
        total_price,
        customerId: custId.id,
        products: { connect: products }
      },
      include: { products: true }
    });
    return newOrder;
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

//used to change the status of resolved
const updateOrder = async req => {
  try {
    const { id, update, products, total_price } = req;
    let order = await Prisma.order.update({
      where: { id: +id },
      data: {
        total_price,
        products: { [update]: products }
      },
      include: { products: true }
    });
    return order;
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

const shipOrder = async req => {
  try {
    const { id } = req;
    const order = await Prisma.order.update({
      where: { id: +id },
      data: {
        fulfilled: true,
        shippedAt: new Date(Date.now())
      }
    });
    // TODO add logic to update product inventory
    return order;
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

module.exports = {
  getAllOrders,
  getUserOrders,
  generateOrder,
  updateOrder,
  shipOrder
};
