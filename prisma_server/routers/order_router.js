const router = require('express').Router();
const {
  findAllOrders,
  findUserOrders,
  createOne,
  updateOne,
  shipOne
} = require('../controllers/order_controller');
const { getUserIdIfExists } = require('../middleware/user_check');
const { checkOrderStatus } = require('../middleware/order_check');

router.get('/orders', findAllOrders);
router.get('/orders/:id', findUserOrders);
router.post('/orders', getUserIdIfExists, createOne);
router.put('/orders/update', checkOrderStatus, updateOne);
router.put('/orders/ship', shipOne);

module.exports = router;
