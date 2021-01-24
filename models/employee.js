const {pool} = require('../startup/mysql_database');

module.exports = class Employee{

    static getAllOrder(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL getAllOrder()",
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    };
                    resolve(results);
                }
            )
        })
      
    
    }

    static completeOrder(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL completeOrder(?)",
                [
                    request.body.order_id
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
    
    static getAcceptedOrders() {
        return new Promise((resolve, reject) => {
            pool.query("CALL getAceptedOrders()",
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

