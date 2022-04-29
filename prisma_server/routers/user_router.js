const router = require('express').Router();
const {
  create,
  index,
  logout,
  updateDetails
} = require('../controllers/user_controller');
//const user_middleware = require('../middlewares/userMiddleware');

router.post('/register', create);
router.post('/login', index);
router.post('/logout', /*user_middleware,*/ logout);

router.put('/profile', updateDetails);

module.exports = router;
