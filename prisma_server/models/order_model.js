const Prisma = require('.');

const getAllOrders = async () => {
  try {
    const allOrders = await Prisma.order.findMany();
    return allOrders;
  } catch (err) {
    return err;
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
    return err;
  }
};

// TODO specify data to generate order to avoid injection
// TODO would it be better to update the user product field instead? Maybe not
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
    return err;
  }
};

//used to change the status of resolved
const fulfillOrder = async (id, req) => {
  try {
    const { id } = req;
    let order = await Prisma.order.update(
      { where: { id } },
      { data: { fulfilled: true, shippedAt: Date.now() } }
    );
    // TODO add logic to update product inventory
    return order;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllOrders, getUserOrders, generateOrder, fulfillOrder };
