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
const addOne = async (req, res) => {
  try {
    const newProducts = await Prisma.product.create({
      data: { ...req.body, colours: { connect: req.body.colours } },
      include: { colours: true } // not sure we need it in the frontend
    });
    res.status(201).send(newProducts);
  } catch (err) {
    console.error(err);
    res
      .status(400)
      .send({ err, message: 'Something went wrong, please try again' });
  }
};

const returnOne = async (req, res) => {
  try {
    const { id } = req.params;
    // const product = await Prisma.product.findUnique({
    //   where: { id: +id },
    //   include: { colours: { include: { scents: true } } }
    // });
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
    res.status(201).send(product);
  } catch (err) {
    console.error(err);
    res.status(404).send({ err, message: 'Not found' });
  }
};

module.exports = { index, addOne, returnOne };
