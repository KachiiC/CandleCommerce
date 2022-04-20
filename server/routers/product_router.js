const router = require('express').Router();
const { index, create} = require('../controllers/products_controller')

router.get('/', index);

router.post('/newProduct', create)

module.exports = router;