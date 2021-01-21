const Customer = require('../../models/customer');

async function getMenu(request,response){
    try {
        const res = await Customer.getmenu();
        const result = JSON.parse(JSON.stringify(res[0]))
        response.render('customer/menu.html',{result: result});
        
    } catch (error) {
        response.send(error.message);
        
    }
    
    
}

async function addToCart(request,response) {
    try {
        await Customer.add_to_cart(request);
    } catch (error) {
        console.log(error);
    }
    console.log("noicee");
    response.redirect('back');
}
exports.getMenu = getMenu;

exports.addToCart = addToCart;

