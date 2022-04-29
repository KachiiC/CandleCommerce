const Prisma = require('.');

// TODO rename function
const index = async (req, res) => {
  try {
    const allProducts = await Prisma.product.findMany();
    return allProducts;
  } catch (err) {
    console.error(err);
    return err;
  }
};

// TODO add controller for the admin to add a product
const addProduct = async (req, res) => {
  try {
    const newProduct = await Prisma.product.create({
      data: { ...req.body, colours: { connect: req.body.colours } }
    });
    return newProduct;
  } catch (err) {
    return err;
  }
};

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Prisma.product.findUnique({
      where: { id: +id },
      include: { colours: true }
    });
    return product;
  } catch (err) {
    return err;
  }
};

module.exports = { index, addProduct, singleProduct };
