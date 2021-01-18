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

exports.getMenu = getMenu;

