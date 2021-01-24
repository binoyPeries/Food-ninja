const express = require('express');

const router = express.Router();
 const {getAllOrder,completeOrder,getAcceptedOrders} = require('../../controller/employee/order');
const path = require('path');

const isLogged = require('../../middleware/login');
const isEmployee = require('../../middleware/employee');

router.get('/view',[isLogged,isEmployee],getAllOrder)
router.post('/view',[isLogged,isEmployee],completeOrder);

router.get('/accepted',[isLogged,isEmployee],getAcceptedOrders);

module.exports = router;