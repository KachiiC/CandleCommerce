const Prisma = require('.');
const { updateProduct } = require('./product_model');

const getAllOrders = async () => {
  try {
    const allOrders = await Prisma.order.findMany();
    return allOrders;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

const getUserOrders = async id => {
  try {
    const userWithOrders = await Prisma.user.findUnique({
      where: { id: +id },
      include: { orders: { include: { products: true } } }
    });
    return userWithOrders.orders; // seems weird we can't do it in one shot (no include and select on the same level)
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
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
        products: { connect: products } // TODO use mapping to connect (see product model addonewithcolors)
      },
      include: { products: true }
    });
    return newOrder;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

const updateOrder = async req => {
  try {
    const { id, update, products, total_price } = req;
    let order = await Prisma.order.update({
      where: { id: +id },
      data: {
        total_price,
        products: { [update]: products } // TODO use mapping to connect (see product model addonewithcolors)
      },
      include: { products: true }
    });
    return order;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

const shipOrder = async req => {
  try {
    const { id } = req;
    let order = await Prisma.order.update({
      where: { id: +id },
      data: {
        fulfilled: true,
        shippedAt: new Date(Date.now())
      },
      include: { products: true }
    });
    order.products = order.products.forEach(
      async product =>
        await updateProduct(product.id, { atomic: 'decrement', inventory: 1 })
    );
    return order;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

module.exports = {
  getAllOrders,
  getUserOrders,
  generateOrder,
  updateOrder,
  shipOrder
};
