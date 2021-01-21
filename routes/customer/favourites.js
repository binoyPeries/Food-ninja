const express = require('express');
const router = express.Router();
const {getFav,removeFavItem} = require('../../controller/customer/favourites');


const isLogged = require('../../middleware/login');
const isCustomer = require('../../middleware/customer');

router.get('/view', [isLogged,isCustomer], getFav);

router.post('/view', [isLogged,isCustomer], removeFavItem);





module.exports = router;
