const express = require('express');
const router = express.Router();
const path = require('path');
const {addFoodItem, removeFoodItem} = require('../../controller/manager/food_item');



router.get('/add',(request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/add_food_items.html'));

});

router.post('/add', addFoodItem);

router.get('/remove',(request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/remove_food_items.html'));

});

router.post('/remove', removeFoodItem);


module.exports = router;