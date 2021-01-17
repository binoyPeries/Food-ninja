DELIMITER $$
CREATE OR REPLACE PROCEDURE `create_employee` (
  `employee_name` VARCHAR(30),
  `job_post` VARCHAR(50),
  `contact_number` INT,
   `email` VARCHAR(50) ,
  `password` VARCHAR (50)
   
  )
BEGIN
    set AUTOCOMMIT = 0;
    INSERT INTO `employee` (`employee_name`,`job_post`,`email`,`password`,`contact_number`) VALUES 
    (employee_name,job_post,email,password,contact_number);
    commit;
END$$

DELIMITER $$
CREATE OR REPLACE PROCEDURE `create_food_item` (
  `food_item_id` VARCHAR(30),
  `food_item_name` VARCHAR(30),
  `price` NUMERIC(6,2),
  `description` VARCHAR(100),
  `calorie_amount` INT,
  `image` BLOB )
BEGIN
    set AUTOCOMMIT = 0;
    INSERT INTO `food_item` (`food_item_id`,`food_item_name`,`price`,`description`,`calorie_amount`,`image`) VALUES 
    (food_item_id,food_item_name,price,description,calorie_amount,image);
    commit;
END$$

-- get all the menue items

DELIMITER
$$
 CREATE OR REPLACE  PROCEDURE getMenu()
   BEGIN 
   SELECT  * FROM  food_item;END
$$


--login related


DELIMITER $$
CREATE OR REPLACE PROCEDURE `login_employee` 
(`email_value` VARCHAR(50))
BEGIN
    SELECT * FROM `employee` WHERE `email`= email_value;
END$$

DELIMITER $$
CREATE OR REPLACE PROCEDURE `login_manager` 
(IN `email_value` VARCHAR(50))
BEGIN
    SELECT * FROM `manager` WHERE `email`= email_value;
END$$

DELIMITER $$
CREATE OR REPLACE PROCEDURE `login_customer` 
(IN `email_value` VARCHAR(50))
BEGIN
    SELECT * FROM `customer` WHERE `email`= email_value;
END$$

DELIMITER $$
CREATE OR REPLACE PROCEDURE `login_driver` 
(IN `email_value` VARCHAR(50))
BEGIN
    SELECT * FROM `delivery_person` WHERE `email`= email_value;
END$$