import { Product } from '@prisma/client';
import { Request } from 'express';
import Prisma from '.';

// TODO rename function
export const returnAllWithColours = async (): Promise<Product[]> => {
  try {
    const allProducts = await Prisma.product.findMany({
      include: { colours: true }
    });
    return allProducts;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

export const returnOneFull = async (req: Request) => {
  try {
    const { id } = req.params;
    const product = await Prisma.product.findUnique({
      where: { id: +id },
      include: { colours: { include: { scents: true } } }
    });
    return product;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

// returns a product with a single colour/scent combination
export const returnSingleCombo = async (req: Request) => {
  try {
    const { id } = req.params;
    const { colour, scent } = req.body;
    const product = await Prisma.product.findUnique({
      where: { id: +id },
      include: {
        colours: {
          where: { colour: colour },
          include: {
            scents: { where: { name: scent } }
          }
        }
      }
    });
    return product;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

// TODO add controller for the admin to add a product
export const addProductWithColours = async (req: Request) => {
  try {
    const { colours } = req.body;
    const newProduct = await Prisma.product.create({
      data: {
        ...req.body,
        colours: {
          connect: colours.map((col: string) => ({ colour: col }))
        }
      },
      include: { colours: true } // not sure we need it in the frontend
    });
    return newProduct;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

// dynamically adds/remove connection, also updates inventory if passed // TODO test what happens when trying to delete a non-existing relation
export const updateProduct = async (req: Request) => {
  try {
    const { id } = req.params;
    const { update, colours, description, price } = req.body;
    // needed because of bug in connection update if atomic/inventory are not passed
    let { atomic, inventory } = req.body;
    if (!atomic || !inventory) (atomic = 'increment') && (inventory = 0);

    const updated = await Prisma.product.update({
      where: { id: +id },
      data: {
        price,
        description,
        inventory: { [atomic]: inventory },
        colours: { [update]: colours }
      },
      include: { colours: true }
    });

    return updated;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};
