const express = require('express');

const router = express.Router();
const {createDiscount} = require('../../controller/manager/discount');
const path = require('path');

const isLogged = require('../../middleware/login');
const isManager = require('../../middleware/manager');
const c = require('config');



router.get('/add' , [isLogged,isManager],(request,response) =>{
    response.render('manager/discount_creation.html',{req:request});

});

 router.post('/add',  [isLogged,isManager],createDiscount);

module.exports = router;