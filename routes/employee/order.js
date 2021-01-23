const express = require('express');

const router = express.Router();
 const {getAllOrder} = require('../../controller/employee/order');
const path = require('path');

const isLogged = require('../../middleware/login');
const isEmployee = require('../../middleware/employee');

router.get('/view',[isLogged,isEmployee],getAllOrder)

module.exports = router;