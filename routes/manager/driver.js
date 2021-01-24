const express = require('express');

const router = express.Router();
const {createDriver} = require('../../controller/manager/driver');
const path = require('path');

const isLogged = require('../../middleware/login');
const isManager = require('../../middleware/manager');



router.get('/create' , [isLogged,isManager],(request,response) =>{
    response.render('manager/driver_creation.html',{req:request});
   

});

router.post('/create',  [isLogged,isManager],createDriver);

module.exports = router;