const router = require('express').Router();

const {
  findAllOrders,
  findUserOrders,
  createOne,
  updateOne,
  shipOne,
  deleteOne
} = require('../controllers/order_controller');

const {
  getUserIdIfExists,
  checkForAdminRole
} = require('../middleware/user_check');

const { checkOrderStatus } = require('../middleware/order_check');

console.log('in order router');

router.get('/orders', checkForAdminRole, findAllOrders);
router.get('/orders/:id', findUserOrders);
router.post('/orders', getUserIdIfExists, createOne);
router.put('/orders/update', checkOrderStatus, updateOne);
router.put('/orders/ship', checkForAdminRole, shipOne);
router.delete('/orders', checkOrderStatus, deleteOne);

module.exports = router;
