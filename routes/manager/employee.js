const express = require('express');

const router = express.Router();
const {createEmployee} = require('../../controller/manager/employee');
const path = require('path');

const isLogged = require('../../middleware/login');
const isManager = require('../../middleware/manager');



router.get('/create' , [isLogged,isManager],(request,response) =>{
    response.render('manager/employee_creation.html',{req:request});

});

router.post('/create',  [isLogged,isManager],createEmployee);

module.exports = router;