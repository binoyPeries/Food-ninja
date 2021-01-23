const express = require('express');
const router = express.Router();
const {createCustomer} = require('../../controller/customer/register');


const isLogged = require('../../middleware/login');
const isCustomer = require('../../middleware/customer');

router.get('/create' , (request,response) =>{
    response.render('customer/register.html');

});


router.post('/create',createCustomer);





module.exports = router;