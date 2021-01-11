const express = require('express');
const router = express.Router();
const managerFunctions = require('./manager_functions')


router.use('/manager_func',managerFunctions);

module.exports = router;