CREATE TABLE `employee` (
  `employee_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `employee_name` varchar(30) NOT NULL,
  `job_post` varchar(50) NOT NULL,
  `email` VARCHAR(50) NOT  NULL UNIQUE ,
  `password` VARCHAR (100) NOT NULL, 
  `contact_number` int NOT NULL
);


CREATE TABLE `manager` (
  `Manager_id` INT  NOT NULL PRIMARY KEY ,
  `Manager_name` varchar(30) NOT NULL,
  `Contact_number` int NOT NULL,
   `email` VARCHAR(50) NOT  NULL UNIQUE ,
  `password` VARCHAR (100) NOT NULL 

);

CREATE TABLE `delivery_person` (
  `Delivery_person_id` INT NOT NULL PRIMARY KEY ,
  `name` varchar(30) NOT NULL,
  `Contact_number` int NOT NULL,
  `Vehicle_Type` varchar(20) NOT NULL,
  `Vehicle_number` varchar(10) NOT NULL,
  `email` VARCHAR(50) NOT  NULL UNIQUE ,
  `password` VARCHAR (100) NOT NULL 

);

CREATE TABLE `customer` (
  `Customer_id` int NOT Null AUTO_INCREMENT PRIMARY  KEY ,
  `Customer_name` varchar(30) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Loyalty_Points` int NOT NULL,
  `Contact_number` int NOT NULL,
   `email` VARCHAR(50) NOT  NULL UNIQUE ,
  `password` VARCHAR (100) NOT NULL, 
);



CREATE TABLE `food_item` (
  `food_item_id` VARCHAR (30) PRIMARY KEY,
  `food_item_name` varchar(30) NOT NULL,
  `price` NUMERIC (6,2) NOT NULL,
  `description` varchar(100) NOT NULL,
  `calorie_amount` int NOT NULL,
  `image` blob 
);



CREATE TABLE `customer_cart` (
  `customer_email` VARCHAR (50) NOT  NULL ,
  `food_item_id` varchar(6) NOT NULL,
  FOREIGN KEY (`customer_email`) REFERENCES customer(`email`),
  FOREIGN KEY (`food_item_id`) REFERENCES food_item(`food_item_id`)



);

-- CREATE TABLE `cart_addition` (
--   `cart_id` int NOT NULL ,
--   `food_item_id` varchar(6) NOT NULL,
--     PRIMARY key (`cart_id`),
--    FOREIGN KEY (`cart_id`) REFERENCES customer(`customer_id`),
--    FOREIGN KEY (`food_item_id`) REFERENCES food_item(`food_item_id`)    
-- );




-- CREATE TABLE `guest_customer_cart` (
--   `Cart_id` INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `guest_id` INT  NOT NULL,
--   FOREIGN KEY (`guest_id`) REFERENCES guest_customer(`Guest_id`),

-- );

-- CREATE TABLE `guest_cart_addition` (
--   `cart_id` int NOT NULL ,
--   `food_item_id` varchar(6) NOT NULL,
--     PRIMARY key (`cart_id`,`food_item_id`),
--    FOREIGN KEY (`cart_id`) REFERENCES guest_customer_cart(`Cart_id`),
--    FOREIGN KEY (`food_item_id`) REFERENCES food_item(`food_item_id`)    
-- );


