const express = require('express');
const router = express.Router();
const managerFunctions = require('./manager_functions');
const customerFunctions = require('./customer_functions');


router.use('/manager_func',managerFunctions);
router.use('/customer_func',customerFunctions);


module.exports = router;