const router = require('express').Router();
const {
  index,
  addProduct,
  singleProduct
} = require('../prisma/controllers/product_controller');

router.get('/', index);

router.get('/product/:id', singleProduct);

router.post('/newProduct', addProduct);

// TODO delete after populating db
// // const prisma = require('../prisma/controllers/index');

// router.post('/colors', async (req, res) => {
//   console.log('body', req.body);
//   try {
//     const colors = await prisma.colour.createMany({ data: req.body });
//     res.status(201).send(colors);
//   } catch (error) {
//     res.sendStatus(500);
//   }
// });

module.exports = router;
