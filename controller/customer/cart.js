const Customer = require('../../models/customer');

async function getCart(request,response){
    try {
        console.log(request.userEmail);
        const res = await Customer.getCart(request);
        const result = JSON.parse(JSON.stringify(res[0]))
        response.render('customer/cart.html',{result: result, req:request});
        // const result = JSON.parse(JSON.stringify(res[0]))
        // response.render('customer/menu.html',{result: result});
        
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


exports.getCart = getCart;
exports.removeCartItem = removeCartItem;
