const Joi = require('joi');

function validateEmployee(Employee){
    const now = Date.now();
    const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 18));

    const schema = Joi.object({
        'employee_name'          : Joi.string().required().alphanum(),
        'job_post'               : Joi.string().required(),
        'contact_number'        : Joi.number().integer().required(),
        'email'                 : Joi.string().required().email(),
        'password' : Joi.string().required().min(6)
    });

    return schema.validate(Employee);
}

exports.validateEmployee = validateEmployee;