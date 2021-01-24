const router = require('express').Router();
const menu = require('./menu');
const cart = require('./cart');
const fav = require('./favourites')
const create = require('./create-from')

router.use('/menu',menu);
router.use('/cart',cart);
router.use('/favourites', fav);
router.use('/register',create)
router.use('/login', require('./login'));

module.exports = router