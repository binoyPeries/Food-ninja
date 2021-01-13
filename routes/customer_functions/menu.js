const express = require('express');

const router = express.Router();
const {pool} = require('../../startup/mysql_database');
const _ = require('lodash');
const path = require('path');


router.get('/view', async (request,response) =>{
    try {
        const res = await getmenu();
        const result = JSON.parse(JSON.stringify(res[0]))
        response.render('menu.html',{result: result});
        
    } catch (error) {
        response.send(error.message);
        
    }
    
    
})


function getmenu() {
    return new Promise((resolve, reject) => {
        pool.query("CALL foods()",
            (error, results, fields) => {
                if (error) {
                    reject(error);
                };
                resolve(results);
            }
        )
    })

    
}
module.exports = router;



