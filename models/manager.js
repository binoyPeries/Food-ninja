const {pool} = require('../startup/mysql_database');

module.exports= class Manager {

    //create employee
    static insertEmployee(body) {
        return new Promise((resolve, reject) => {
            pool.query("CALL create_employee (?,?,?,?,?)",
                [
                    body.employee_name,
                    body.job_post,
                    body.email,
                    body.password,
                    body.contact_number,
                ],
                function (error, results, fields) {
                    if (error) {
                        reject(error);
                    };
                    resolve(console.log("entered sucessfully"));
                }
            )
        })
    
        
    }

    static  addFoodItem(body) {
        return new Promise((resolve, reject) => {
            pool.query("CALL create_food_item (?,?,?,?,?,?)",
                [
                    body.food_item_id,
                    body.food_item_name,
                    body.price,
                    body.description,
                    body.calorie_amount,
                    body.image,
    
                ],
                function (error, results, fields) {
                    if (error) {
                        reject(error);
                    };
                    resolve(console.log("entered sucessfully"));
                }
            )
        })
    
        
    }


    static insertDriver(body) {
        return new Promise((resolve, reject) => {
            pool.query("CALL create_driver (?,?,?,?,?,?)",
                [
                    body.name,
                    body.contact_number,
                    body.vehicle_type,
                    body.vehicle_number,
                    body.email,
                    body.password
                    
                ],
                function (error, results, fields) {
                    if (error) {
                        reject(error);
                    };
                    resolve(console.log("entered sucessfully"));
                }
            )
        })
    
        
    }

    static addDiscount(body) {
        return new Promise((resolve, reject) => {
            pool.query("CALL create_discount (?,?,?,?,?)",
                [
                    body.discount_description,
                    body.eligible_price,
                    body.discount_percentage,
                    body.start_date,
                    body.end_date
                ],
                function (error, results, fields) {
                    if (error) {
                        reject(error);
                    };
                    resolve(console.log("entered sucessfully"));
                }
            )
        })
    
        
    }

    

}

