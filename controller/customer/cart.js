const Customer = require('../../models/customer');

async function getCart(request,response){
    try {
        console.log(request.userEmail);
        const res = await Customer.getCart(request);
        const result = JSON.parse(JSON.stringify(res[0]))
        console.log(res);
        response.render('customer/cart.html',{result: result});
        // const result = JSON.parse(JSON.stringify(res[0]))
        // response.render('customer/menu.html',{result: result});
        
    } catch (error) {
        response.send(error.message);
        
    }
    
    
}


exports.getCart = getCart;
