const Prisma = require('.');

// TODO rename function
const index = async (req, res) => {
  try {
    const allProducts = await Prisma.product.findMany();
    res.status(200).send(allProducts);
  } catch (err) {
    console.error(err);
    res.status(500).send({ err, message: 'Ooops, something went wrong...' });
  }
};

// TODO add controller for the admin to add a product
const addProduct = async (req, res) => {
  try {
    // FOR COLOUR RELATION
    // const newProducts = await Prisma.product.create({
    //   data: { ...req.body, colours: { create: req.body.colours } }
    // });
    const newProducts = await Prisma.product.create({ data: req.body });
    res.status(201).send(newProducts);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Prisma.product.findUnique({
      where: { id: +id },
      include: { colours: true } // TODO no need for this since we're not populating the colours with relations enymore
    });
    res.status(201).send(product);
  } catch (err) {
    console.error(err);
    res.status(404).send({ err, message: 'Not found' });
  }
};

module.exports = { index, addProduct, singleProduct };
