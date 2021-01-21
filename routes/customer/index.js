const router = require('express').Router();
const menu = require('./menu');
const cart = require('./cart');

router.use('/menu',menu);
router.use('/cart',cart);
router.use('/login', require('./login'));

module.exports = router