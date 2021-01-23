const Employee =require('../../models/employee');

async function getAllOrder(request,response){
    try {
         const result =  await Employee.getAllOrder();
         const order = JSON.parse(JSON.stringify(result[0]));
         response.render('employee/orderlist.html',{order: order, req:request});
        
        
    } catch (error) {
        response.send(error.message);
        
    }
    
    
}

exports.getAllOrder = getAllOrder;