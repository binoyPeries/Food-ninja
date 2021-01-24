const {validateDiscount} = require('../../validation/discount_creation');
const Manager = require('../../models/manager');
const _ = require('lodash');



async function createDiscount(request,response) {
    const {error} = validateDiscount(request.body);
    if(error){
        return response.status(400).send(error.message);
    }


    try {
        await Manager.addDiscount(_.pick(request.body,["discount_description","eligible_price","discount_percentage","start_date","end_date"]));
        
    } catch (error) {
       return  response.status(400).send(error.message);
    }

    response.render('manager/home.html');
    
}

exports.createDiscount = createDiscount;





