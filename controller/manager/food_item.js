const {validateFoodItem} = require('../../validation/food_item_creation');
const Manager = require('../../models/manager');
const _ = require('lodash');
const path = require('path');
async function addFoodItem(request,response){
    const {error} = validateFoodItem(request.body);
    if(error){
        return response.status(400).send(error.message);
    }

    try {
        await Manager.addFoodItem(_.pick(request.body,["food_item_id","food_item_name","price","description","calorie_amount","image"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    return response.send(request.body);

}


async function removeFoodItem(request,response){
    try {
        const k = await Manager.removeFoodItem(_.pick(request.body,["item_id"]));
        console.log(k);
    } catch (error) {
        return  response.status(400).send(error.message);
    }
    
    return  response.send("sucessful");

}
exports.addFoodItem= addFoodItem;
exports.removeFoodItem = removeFoodItem;    