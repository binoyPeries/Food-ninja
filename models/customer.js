const { request } = require('express');
const {pool} = require('../startup/mysql_database');

module.exports= class Customer {
    static getmenu() {
        return new Promise((resolve, reject) => {
            pool.query("CALL getMenu()",
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    };
                    resolve(results);
                }
            )
        })
      
    }

    static add_to_cart(request){
        return new Promise((resolve,reject) =>{
            pool.query("CALL add_to_cart(?,?)",
            [
                request.userEmail,
                request.body.item
            ],
            (error, results, fields) => {
                if (error) {
                    reject(error);
                };
                resolve(console.log('doneeee'));
            }
        )

        })
        
    }

    static getCart(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL getcart(?)",
                [
                    request.userEmail
                ],
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    };
                    resolve(results);
                }
            )
        })
      
    }

   
    

}

