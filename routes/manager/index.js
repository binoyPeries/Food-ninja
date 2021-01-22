const employee = require('./employee');
const food_item = require('./food_items')
const router = require('express').Router();
const driver = require('./driver')
const discount = require('./discount')
router.use('/login', require('./login'));
router.use('/employee', employee);
router.use('/food_items', food_item);
router.use('/driver',driver);
router.use('/discount', discount);


module.exports = router;