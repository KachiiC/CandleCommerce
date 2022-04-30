const Prisma = require('.');

// TODO rename function
const returnAllWithColours = async (req, res) => {
  try {
    const allProducts = await Prisma.product.findMany({ include: colours });
    return allProducts;
  } catch (err) {
    return err;
  }
};

// TODO add controller for the admin to add a product
const addOneWithColours = async req => {
  try {
    const newProduct = await Prisma.product.create({
      data: { ...req, colours: { connect: req.colours } },
      include: { colours: true } // not sure we need it in the frontend
    });
    return newProduct;
  } catch (err) {
    console.error(err);
    return err;
  }
};
const returnOneFull = async req => {
  try {
    const { id } = req;
    const product = await Prisma.product.findUnique({
      where: { id },
      include: { colours: { include: { scents: true } } }
    });
    return product;
  } catch (err) {
    return err;
  }
};

const returnSingleCombo = async (req, res) => {
  try {
    const { id } = req.params;
    const { colour, scent } = req.body;
    const product = await Prisma.product.findUnique({
      //this query returns a product with a single colour/scent combination
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

module.exports = {
  returnAllWithColours,
  addOneWithColours,
  returnSingleCombo,
  returnOneFull
};
