const {pool} = require('../startup/mysql_database');

module.exports = class Driver{
    static notDelivered(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL tobeDelivered()",
                (error, results, fields) => {
                    if (error) {
                        reject(error);
                    };
                    resolve(results);
                }
            )
        })
      
    
    }
    static updateDelivery(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL updateDelivery(?,?)",
                [
                    request.body.order_id,
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

    static getOrderByDriver(request) {
        return new Promise((resolve, reject) => {
            pool.query("CALL getorderByDriver(?)",
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