const router = require('express').Router();
const {
  index,
  addProduct,
  singleProduct
} = require('../controllers/product_controller');

router.get('/', index);

router.get('/product/:id', singleProduct);

router.post('/newProduct', addProduct);

// TODO delete after populating db
// const prisma = require('../controllers/index');

// router.post('/colors', async (req, res) => {
//   console.log('body', req.body);
//   const { colour, scents } = req.body;
//   try {
//     const newColor = await prisma.colour.create({
//       data: { colour: colour, scents: { connect: scents } },
//       include: { scents: true }
//     });
//     console.log('NC', newColor);
//     res.status(201).send(newColor);
//   } catch (error) {
//     res.status(500).send('Function failed');
//   }
// });

module.exports = router;
