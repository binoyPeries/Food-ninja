const express = require('express');

const router = express.Router();
const {createDriver} = require('../../controller/manager/driver');
const path = require('path');

const isLogged = require('../../middleware/login');
const isManager = require('../../middleware/manager');



router.get('/create' , [isLogged,isManager],(request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/manager/driver_creation.html'));

});

router.post('/create',  [isLogged,isManager],createDriver);

module.exports = router;