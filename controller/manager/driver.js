const {validateDriver} = require('../../validation/driver_creation');
const Manager = require('../../models/manager');
const _ = require('lodash');
const bcrypt = require('bcrypt');


async function createDriver(request,response) {
    const {error} = validateDriver(request.body);
    if(error){
        return response.status(400).send(error.message);
    }

    const salt = await bcrypt.genSalt(5);
    request.body.password = await bcrypt.hash(request.body.password, salt);

    try {
        await Manager.insertDriver(_.pick(request.body,["name","contact_number","vehicle_type","vehicle_number","email","password"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    return response.send(request.body);
    
}

exports.createDriver = createDriver;





