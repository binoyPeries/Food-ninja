const express = require('express');

const router = express.Router();
const {validateEmployee} = require('../../models/employee_creation');
const {pool} = require('../../startup/mysql_database');
const _ = require('lodash');
const path = require('path');



router.get('/create' , (request,response) =>{
    response.sendFile(path.join(__dirname, '../../views/employee_creation.html'));

});
router.post('/create', async (request,response)=>{
    const {error} = validateEmployee(request.body);
    if(error){
        return response.status(400).send(error.message);
    }

    try {
        await insertEmployee(_.pick(request.body,["employee_name","job_post","contact_number"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    response.send(request.body);

});


function insertEmployee(body) {
    return new Promise((resolve, reject) => {
        pool.query("CALL create_employee (?,?,?)",
            [
                body.employee_name,
                body.job_post,
                body.contact_number,
            ],
            function (error, results, fields) {
                if (error) {
                    reject(error);
                };
                resolve(console.log("entered sucessfully"));
            }
        )
    })

    
}

module.exports = router;