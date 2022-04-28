const router = require('express').Router();
const {
  findUserOrders,
  index,
  generate,
  update
} = require('../prisma/controllers/order_controller');

router.post('/ordersUser', findUserOrders);

router.get('/orders', index);
router.post('/orders', generate);
router.put('/orders', update);

module.exports = router;
