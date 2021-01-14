const express = require('express');
const router = express.Router();
const managerFunctions = require('./manager');
const customerFunctions = require('./customer');


router.use('/manager_func',managerFunctions);
router.use('/customer_func',customerFunctions);


module.exports = router;