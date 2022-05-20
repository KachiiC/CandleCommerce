import { Request } from 'express';
import Prisma from '.';

export const getAllOrders = async () => {
  try {
    const allOrders = await Prisma.order.findMany();
    return allOrders;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

export const getUserOrders = async (req: Request) => {
  try {
    const { id } = req.body.custId;
    const userOrders = await Prisma.order.findMany({
      where: { customerId: +id },
      include: { products: true }
    });
    return userOrders;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

// CUSTOMER ID comes from the middleware through the sub, ADDRESS ID is sent from the client
export const generateOrder = async (req: Request) => {
  try {
    const { products, total_price, custId, addrId } = req.body;

    const newOrder = await Prisma.order.create({
      data: {
        addressId: addrId,
        customerId: custId.id,
        total_price,
        products: {
          connect: products.map((prod: number) => ({ id: prod }))
        } // can be changed with title or other unique fields
      },
      include: { products: true, address: true }
    });
    return newOrder;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

export const updateOrder = async (req: Request) => {
  try {
    const { id, update, products, addrId, total_price } = req.body;
    let order = await Prisma.order.update({
      where: { id },
      data: {
        addressId: addrId,
        total_price,
        products: {
          [update]: products.map((prod: number) => ({ id: prod }))
        } // can be changed with title or other unique fields
      },
      include: {
        products: true
      } // TODO do we also need the user and the address details?
    });
    return order;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

// TODO ONLY BY THE ADMIN
export const shipOrder = async (req: Request) => {
  try {
    const { id } = req.body;
    let order = await Prisma.order.update({
      where: { id },
      data: {
        fulfilled: true,
        shippedAt: new Date()
      },
      include: { products: true }
    });
    // update product inventory
    order.products.forEach(
      async product =>
        await Prisma.product.update({
          where: { id: product.id },
          data: {
            inventory: { decrement: 1 }
          },
          include: { colours: true }
        })
    );
    return order;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

export const deleteOrder = async (req: Request) => {
  try {
    const { id } = req.body;
    await Prisma.order.delete({ where: { id } });
    return;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};
