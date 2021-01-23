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

}

