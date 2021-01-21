const express = require('express');
const {getMenu, addToCart} = require('../../controller/customer/menu')
const router = express.Router();
const {pool} = require('../../startup/mysql_database');


const isLogged = require('../../middleware/login');
const isCustomer = require('../../middleware/customer');


router.get('/view',[isLogged,isCustomer], getMenu);

router.post('/view',[isLogged,isCustomer], addToCart);





module.exports = router;



