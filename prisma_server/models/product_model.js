const Prisma = require('.');

// TODO rename function
const returnAllWithColours = async () => {
  try {
    const allProducts = await Prisma.product.findMany({ include: colours });
    return allProducts;
  } catch (err) {
    return err;
  }
};

const returnOneFull = async req => {
  try {
    const { id } = req;
    const product = await Prisma.product.findUnique({
      where: { id: +id },
      include: { colours: { include: { scents: true } } }
    });
    return product;
  } catch (err) {
    return err;
  }
};

// returns a product with a single colour/scent combination
const returnSingleCombo = async (id, req) => {
  try {
    const { colour, scent } = req;
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
    return err;
  }
};

// TODO add controller for the admin to add a product
const addOneWithColours = async req => {
  try {
    const { colours } = req;
    const newProduct = await Prisma.product.create({
      data: { ...req, colours: { connect: colours } },
      include: { colours: true } // not sure we need it in the frontend
    });
    return newProduct;
  } catch (err) {
    return err;
  }
};

// dynamically adds/remove connection, also updates inventory if passed // TODO test what happens when trying to delete a non-existing relation
const updateProduct = async (id, req) => {
  try {
    const { update, colours, description, price } = req;
    // needed because of bug in connection update if atomic/inventory are not passed
    let { atomic, inventory } = req;
    if (!atomic || !inventory) (atomic = 'increment') && (inventory = 0);
    console.log('newvalues', atomic, inventory);
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
    return err;
  }
};

module.exports = {
  returnAllWithColours,
  returnSingleCombo,
  returnOneFull,
  addOneWithColours,
  updateProduct
};
