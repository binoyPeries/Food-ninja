const {validateEmployee} = require('../../validation/employee_creation');
const Manager = require('../../models/manager');
const _ = require('lodash');
const bcrypt = require('bcrypt');


async function createEmployee(request,response) {
    const {error} = validateEmployee(request.body);
    if(error){
        return response.status(400).send(error.message);
    }

    const salt = await bcrypt.genSalt(5);
    request.body.password = await bcrypt.hash(request.body.password, salt);

    try {
        await Manager.insertEmployee(_.pick(request.body,["employee_name","job_post","email","password","contact_number"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    return response.send("Entered successfully ");
    
}

exports.createEmployee = createEmployee;





