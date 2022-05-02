const router = require('express').Router();

const {
  findAll,
  findOneWithCombo,
  findOneWithDetails,
  addOne,
  updateOne
} = require('../controllers/product_controller');

router.get('/', findAll);
router.get('/product/:id', findOneWithDetails);
router.get('/product-combo/:id', findOneWithCombo);

router.post('/product', addOne);

router.put('/product/:id', updateOne);

module.exports = router;
