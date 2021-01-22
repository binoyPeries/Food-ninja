const Customer = require('../../models/customer');

async function getCart(request,response){
    try {
        const res = await Customer.getCart(request);
        const res2 = await Customer.getTotalPrice(request);
        const result = JSON.parse(JSON.stringify(res[0]));
        const total = JSON.parse(JSON.stringify(res2[0]));
        response.render('customer/cart.html',{result: result, req:request ,total:total});
        
    } catch (error) {
        response.send(error.message);
        
    }
    
    
}

async function removeCartItem(request,response){
    try {
         await Customer.removeCartItem(request);
        
       
        
    } catch (error) {
        response.send(error.message);
        
    }
    response.redirect('back');
    
    
}


async function createOrder(request,response){
    try {
         await Customer.createOrder(request);
         const result =  await Customer.getCurrentOrder(request);
         const order = JSON.parse(JSON.stringify(result[0]));
         response.render('customer/order.html',{order: order, req:request});
        
        
    } catch (error) {
        response.send(error.message);
        
    }
    
    
}



exports.getCart = getCart;
exports.removeCartItem = removeCartItem;
exports.createOrder=createOrder;
