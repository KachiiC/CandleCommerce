import { Product } from '@prisma/client';
import Prisma from '.';
import { returnSingleComboBodyProps, updateProductBodyProps } from './props/productModelProps';

// TODO rename function
export const returnAllWithColours = async () : Promise<Product[]>=> {
  try {
<<<<<<< HEAD:prisma_server/models/product_model.js
    const allProducts = await Prisma.product.findMany({
      include: { colours: true } // TODO check for merge conflicts
=======
    // what is colours?
    const allProducts = await Prisma.product.findMany({
      include: { colours: true }
>>>>>>> f70017aebc8029c01b23f7449a911a6b0eb5ae08:prisma_server/src/models/product.model.ts
    });
    return allProducts;
  } catch (err) {
    console.error(err);
    throw new Error('\nFailed in the model\n');
  }
};

export const returnOneFull = async (id: string | number) => {
  try {
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
export const returnSingleCombo = async (id: string | number, body: returnSingleComboBodyProps) => {
  try {
    const { colour, scent } = body;
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
export const addProductWithColours = async (body: { colours: ; }) => {
  try {
    const { colours } = body;
    const newProduct = await Prisma.product.create({
      data: {
        ...body,
        colours: {
          connect: colours.map(col => ({ colour: col }))
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
export const updateProduct = async (id: number | string, body: updateProductBodyProps) => {
  try {
    const { update, colours, description, price } = body;
    // needed because of bug in connection update if atomic/inventory are not passed
    let { atomic, inventory } = body;
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