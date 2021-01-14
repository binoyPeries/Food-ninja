const {validateFoodItem} = require('../../validation/food_item_creation');
const Manager = require('../../models/manager');
const _ = require('lodash');

async function addFoodItem(request,response){
    const {error} = validateFoodItem(request.body);
    if(error){
        return response.status(400).send(error.message);
    }

    try {
        await Manager.addFoodItem(_.pick(request.body,["food_item_name","price","description","calorie_amount","image"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    return response.send(request.body);

}

exports.addFoodItem= addFoodItem;