const express = require('express');
const router = express.Router();
const path = require('path');
const {addFoodItem} = require('../../controller/manager/food_item');
const isLogged = require('../../middleware/login');
const isManager = require('../../middleware/manager');


router.get('/add', [isLogged,isManager],(request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/manager/add_food_items.html'));

});

router.post('/add', addFoodItem);


module.exports = router;