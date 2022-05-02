const router = require('express').Router();

const { userCheck, userUpdate } = require('../controllers/user_controller');

router.post('/signin', userCheck);

router.put('/profile', userUpdate);

module.exports = router;
