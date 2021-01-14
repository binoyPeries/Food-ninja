const {validateEmployee} = require('../../validation/employee_creation');
const Manager = require('../../models/manager');
const _ = require('lodash');


async function createEmployee(request,response) {
    const {error} = validateEmployee(request.body);
    if(error){
        return response.status(400).send(error.message);
    }

    try {
        await Manager.insertEmployee(_.pick(request.body,["employee_name","job_post","contact_number"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    return response.send(request.body);
    
}

exports.createEmployee = createEmployee;