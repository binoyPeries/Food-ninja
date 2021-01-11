const employee = require('./employee');
const food_item = require('./food_items')
const router = require('express').Router();

router.use('/employee', employee);
router.use('/food_items', food_item);

module.exports = router;