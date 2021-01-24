const Customer = require('../../models/customer');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const {validateCustomer} = require('../../validation/customer_register');

async function createCustomer(request,response) {
    const {error} = validateCustomer(request.body);
    if(error){
        return response.status(400).send(error.message);
    }

    const salt = await bcrypt.genSalt(5);
    request.body.password = await bcrypt.hash(request.body.password, salt);

    try {
        await Customer.createCustomer(_.pick(request.body,["customer_name","address","contact_number","email","password"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    response.render('customer/home.html');
    
}
exports.createCustomer = createCustomer;

