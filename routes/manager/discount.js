const express = require('express');

const router = express.Router();
const {createDiscount} = require('../../controller/manager/discount');
const path = require('path');

const isLogged = require('../../middleware/login');
const isManager = require('../../middleware/manager');
const c = require('config');



router.get('/add' , [isLogged,isManager],(request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/manager/discount_creation.html'));

});

 router.post('/add',  [isLogged,isManager],createDiscount);

module.exports = router;