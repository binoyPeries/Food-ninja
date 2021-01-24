const router = require('express').Router();
const order =require('./order');


router.use('/orders',order);
router.use('/login', require('./login'));
module.exports = router