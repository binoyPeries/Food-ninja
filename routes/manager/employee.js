const express = require('express');

const router = express.Router();
const {createEmployee} = require('../../controller/manager/employee');
const _ = require('lodash');
const path = require('path');



router.get('/create' , (request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/employee_creation.html'));

});

router.post('/create', createEmployee);

module.exports = router;