const router = require('express').Router();
const order = require('./order')

router.use('/login', require('./login'));
router.use('/orders',order);

module.exports = router