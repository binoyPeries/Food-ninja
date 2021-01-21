const router = require('express').Router();
const menu = require('./menu');
const cart = require('./cart');
const fav = require('./favourites')

router.use('/menu',menu);
router.use('/cart',cart);
router.use('/favourites', fav);
router.use('/login', require('./login'));

module.exports = router