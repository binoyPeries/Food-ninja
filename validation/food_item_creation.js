const Joi = require('joi');

function validateFoodItem(item){
 

    const schema = Joi.object({

        'food_item_name'      : Joi.string().required().alphanum().max(30),
        'price'               : Joi.number().required().precision(2).positive(),
        'description'         : Joi.string().required().max(100),
        'calorie_amount'      : Joi.number().required().precision(2).positive(),
        'image'              : Joi.string()
        //joi image validation
        
    });

    return schema.validate(item);
}

exports.validateFoodItem = validateFoodItem;