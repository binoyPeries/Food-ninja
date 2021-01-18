const express = require('express');

const router = express.Router();
const {createEmployee} = require('../../controller/manager/employee');
const path = require('path');

const isLogged = require('../../middleware/login');
const isManager = require('../../middleware/manager');



router.get('/create' , [isLogged,isManager],(request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/manager/employee_creation.html'));

});

router.post('/create',  [isLogged,isManager],createEmployee);

module.exports = router;