const Joi = require('joi');

function validateDriver(driver){
  

    const schema = Joi.object({
        'name'          : Joi.string().required(),
        'contact_number'        : Joi.number().integer().required(),
        'vehicle_type' : Joi.string().required().max(20),
        'vehicle_number' : Joi.string().required().max(10),
        'email'                 : Joi.string().required().email(),
        'password'   : Joi.string().required().min(6)
    });

    return schema.validate(driver);
}

exports.validateDriver = validateDriver;