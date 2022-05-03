import Prisma from '.';
import { updateProduct } from './product.model';
import { generateOrderProps, updateOrderProps } from './props/orderModelProps';

export const getAllOrders = async () => {
  try {
    const allOrders = await Prisma.order.findMany();
    return allOrders;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

export const getUserOrders = async (id: string | number) => {
  try {
    const userWithOrders = await Prisma.user.findUnique({
      where: { id: +id },
      include: { orders: { include: { products: true } } }
    });
    // seems weird we can't do it in one shot (no include and select on the same level)
    return userWithOrders.orders;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

// CUSTOMER ID comes from the middleware through the sub, ADDRESS ID is sent from the client
export const generateOrder = async (body: generateOrderProps) => {
  try {
    const { products, total_price, custId, addrId } = body;

    const newOrder = await Prisma.order.create({
      data: {
        addressId: addrId,
        customerId: custId.id,
        total_price,
        products: {
          connect: products.map((prod: any) => ({ id: prod }))
        }, // can be changed with title or other unique fields
      },
      include: { products: true, address: true }
    });
    return newOrder;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

export const updateOrder = async (body: updateOrderProps) => {
  try {
    const { id, update, products, addrId, total_price } = body;
    let order = await Prisma.order.update({
      where: { id },
      data: {
        addressId: addrId,
        total_price,
        products: {
          [update]: products.map((prod: any) => ({ id: prod }))
        }, // can be changed with title or other unique fields
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
export const shipOrder = async (id: any) => {
  try {
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

export const deleteOrder = async (id: any) => {
  try {
    await Prisma.order.delete({ where: { id } });
    return;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};