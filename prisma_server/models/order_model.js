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

// CUSTOMER ID comes from the middleware through the sub, ADDRESS ID is sent from the client
const generateOrder = async req => {
  try {
    const { products, total_price, custId, addrId } = req.body;
    console.log('custId', custId, 'addrId', addrId);
    const newOrder = await Prisma.order.create({
      data: {
        total_price,
        customerId: custId.id,
        products: { connect: products.map(prod => ({ id: prod })) }, // can be changed with title or other unique fields
        addressId: addrId
      },
      include: { products: true, address: true }
    });
    return newOrder;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

const updateOrder = async req => {
  try {
    const { id, update, products, addrId, total_price } = req;
    let order = await Prisma.order.update({
      where: { id },
      data: {
        total_price,
        products: { [update]: products.map(prod => ({ id: prod })) }, // can be changed with title or other unique fields
        addressId: addrId
      },
      include: { products: true } // TODO do we also need the user and the address details?
    });
    return order;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

// TODO ONLY BY THE ADMIN
const shipOrder = async req => {
  try {
    const { id } = req;
    let order = await Prisma.order.update({
      where: { id },
      data: {
        fulfilled: true,
        shippedAt: new Date()
      },
      include: { products: true }
    });
    order.products.forEach(
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
