const Customer = require('../../models/customer');

async function getMenu(request,response){
    try {
        const res = await Customer.getmenu();
        const result = JSON.parse(JSON.stringify(res[0]))
        response.render('customer/menu.html',{result: result , req: request});
        
    } catch (error) {
        response.send(error.message);
        
    }
    
    
}

async function addToCart(request,response) {
    // 1 means cart
    // 2 means favourite
    try {
        if(request.body.method_type ==1){
            await Customer.add_to_cart(request);
        }

        else if(request.body.method_type ==2){
            await Customer.add_to_fav(request);


        }
        
    } catch (error) {
        console.log(error);
    }
    response.redirect('back');
}
exports.getMenu = getMenu;

exports.addToCart = addToCart;

