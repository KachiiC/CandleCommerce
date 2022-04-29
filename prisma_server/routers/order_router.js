const router = require('express').Router();
const {
  findUserOrders,
  index,
  generate,
  update
} = require('../controllers/order_controller');

router.get('/ordersUser/:id', findUserOrders);

router.get('/orders', index);
router.post('/orders', generate);
router.put('/orders', update);

module.exports = router;
