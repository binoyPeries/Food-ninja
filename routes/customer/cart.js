const express = require('express');
const router = express.Router();
const {getCart} = require('../../controller/customer/cart');


const isLogged = require('../../middleware/login');
const isCustomer = require('../../middleware/customer');

router.get('/view', [isLogged,isCustomer], getCart);





module.exports = router;
