const express = require('express');
const router = express.Router();
const {getCart,removeCartItem} = require('../../controller/customer/cart');


const isLogged = require('../../middleware/login');
const isCustomer = require('../../middleware/customer');

router.get('/view', [isLogged,isCustomer], getCart);

router.post('/view', [isLogged,isCustomer], removeCartItem);





module.exports = router;
