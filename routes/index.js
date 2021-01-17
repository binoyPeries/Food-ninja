const express = require('express');
const router = express.Router();

const managerFunctions = require('./manager');
const customerFunctions = require('./customer');
const driverFunctions = require('./driver');
const employeeFunctions = require('./employee');


const home = require('./home');
const login = require('./login');
const logout = require('./logout');

// this is the path taken to register new users
router.use('/', home);
router.use('/login', login);
router.use('/logout', logout);


router.use('/manager_func',managerFunctions);
router.use('/customer_func',customerFunctions);
router.use('/driver_func',driverFunctions);
router.use('/employee_func',employeeFunctions);


module.exports = router;