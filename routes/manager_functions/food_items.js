const express = require('express');
const router = express.Router();
const {pool} = require('../../startup/mysql_database');
const _ = require('lodash');
const path = require('path');
const {validateFoodItem} = require('../../models/food_item_creation');


router.get('/add',(request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/add_food_items.html'));
    // response.send("hekel");

});

router.post('/add', async (request,response)=>{
    const {error} = validateFoodItem(request.body);
    if(error){
        return response.status(400).send(error.message);
    }

    try {
        await addFoodItem(_.pick(request.body,["food_item_name","price","description","calorie_amount","image"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    response.send(request.body);

});


function addFoodItem(body) {
    return new Promise((resolve, reject) => {
        pool.query("CALL create_food_item (?,?,?,?,?)",
            [
                body.food_item_name,
                body.price,
                body.description,
                body.calorie_amount,
                body.image,

            ],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                };
                resolve(console.log("entered sucessfully"));
            }
        )
    })

    
}


module.exports = router;