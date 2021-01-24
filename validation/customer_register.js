const Joi = require('joi');

function validateCustomer(customer){
  

    const schema = Joi.object({
        'customer_name'          : Joi.string().required(),
        'address'               : Joi.string().required(),
        'contact_number'        : Joi.number().integer().required(),
        'email'                 : Joi.string().required().email(),
        'password'   : Joi.string().required().min(6)
    });

    return schema.validate(customer);
}

exports.validateCustomer = validateCustomer;