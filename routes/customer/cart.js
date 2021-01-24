const express = require('express');
const router = express.Router();
const {getCart,removeCartItem,createOrder,showDiscount,getOngoinOrder,loadOrderFinal} = require('../../controller/customer/cart');


const isLogged = require('../../middleware/login');
const isCustomer = require('../../middleware/customer');
const { request, response } = require('express');

router.get('/view', [isLogged,isCustomer], getCart);

router.post('/view', [isLogged,isCustomer], removeCartItem);

router.get('/order',[isLogged,isCustomer],createOrder);

router.post('/order',[isLogged,isCustomer],getOngoinOrder);


router.post('/order/final',[isLogged,isCustomer],loadOrderFinal);


router.post('/discount',[isLogged,isCustomer],showDiscount);







module.exports = router;
