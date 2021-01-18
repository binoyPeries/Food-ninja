const { pool } = require('../startup/mysql_database');

function getPassword(email, table) {
    let field = 'email';
  
    return new Promise((resolve, reject) => {
        const result = pool.query(`SELECT password FROM ${table} WHERE ${field}=?`,
            [
                email
            ],
            async function (error, results, fields) {
                if (error) {
                    reject(error);
                }
                // console.log(`result ${JSON.stringify(result)}`);
                else{
                    
                    if(results.length>0){
                        resolve(results[0].password);
                    }

                    else{
                        resolve(null);
                    }
                }

                // console.log(result.sql);
                // console.log(`****results ${results}`);
                // // console.log(results[0]);
                // resolve(results);
            }
        )
    });

}

exports.getPassword = getPassword;