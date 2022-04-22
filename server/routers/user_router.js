const router = require('express').Router();
const userController = require('../controllers/user_controller');
const user_middleware  = require('../middlewares/userMiddleware')

router.post('/register', userController.create);
router.post('/login', userController.index);
router.get('/', user_middleware , userController.userProfile);
router.post('/logout', user_middleware, userController.logout);

router.get('/orders', user_middleware, userController.userProfile); //will need to pop this into orders route. Note to self

module.exports = router;