const express = require('express');
const {getMenu} = require('../../controller/customer/menu')
const router = express.Router();
const {pool} = require('../../startup/mysql_database');
const _ = require('lodash');
const path = require('path');

const isLogged = require('../../middleware/login');
const isCustomer = require('../../middleware/customer');


router.get('/view',[isLogged,isCustomer],getMenu );



module.exports = router;



