const express = require('express');

const router = express.Router();
const {tobeDelivered,updateDelivery,getOrderByDriver} = require('../../controller/driver/order');
const path = require('path');

const isLogged = require('../../middleware/login');
const isDriver = require('../../middleware/driver');

router.get('/pending',[isLogged,isDriver],tobeDelivered);
router.post('/pending',[isLogged,isDriver],updateDelivery);

router.get('/my',[isLogged,isDriver],getOrderByDriver);
module.exports = router;