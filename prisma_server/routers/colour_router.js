const router = require('express').Router();

const { addOne, deleteOne } = require('../controllers/colour_controller');

router.post('/colour/:id', addOne);
router.delete('/colour/:id', deleteOne);

module.exports = router;
