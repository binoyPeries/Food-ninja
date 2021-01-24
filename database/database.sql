DROP SCHEMA IF EXISTS ninja;
CREATE  database ninja;
use ninja;

CREATE TABLE `manager` (
  `Manager_id` INT  NOT NULL PRIMARY KEY ,
  `Manager_name` varchar(30) NOT NULL,
  `Contact_number` int NOT NULL,
   `email` VARCHAR(50) NOT  NULL UNIQUE ,
  `password` VARCHAR (100) NOT NULL 

);
CREATE TABLE `employee` (
  `employee_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `employee_name` varchar(30) NOT NULL,
  `job_post` varchar(50) NOT NULL,
  `email` VARCHAR(50) NOT  NULL UNIQUE ,
  `password` VARCHAR (100) NOT NULL, 
  `contact_number` int NOT NULL
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
ALTER TABLE customer MODIFY COLUMN `Loyalty_Points` INT  DEFAULT 100;

CREATE TABLE `delivery_person` (
  `d_id` INT NOT NULL PRIMARY KEY ,
  `name` varchar(30) NOT NULL,
  `Contact_number` int NOT NULL,
  `vehicle_type` varchar(20) NOT NULL,
  `vehicle_number` varchar(10) NOT NULL,
  `email` VARCHAR(50) NOT  NULL UNIQUE ,
  `password` VARCHAR (100) NOT NULL 

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

CREATE TABLE `customer_favourites` (
  `customer_email` VARCHAR (50) NOT  NULL ,
  `food_item_id` varchar(6) NOT NULL,
  FOREIGN KEY (`customer_email`) REFERENCES customer(`email`),
  FOREIGN KEY (`food_item_id`) REFERENCES food_item(`food_item_id`)



);

CREATE TABLE `discount` (
  `Discount_id`INT  NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `Discount_description` varchar(200) NOT NULL,
  `Eligible_price` double(8,2) NOT NULL,
  `Discount_percentage` double(4,2) NOT NULL,
  `Start_date` DATETIME   NOT NULL,
  `End_date` DATETIME   NOT NULL
);

CREATE  TABLE `order_cart`(
  `order_id`  INT NOT NULL ,
  `customer_email` VARCHAR(50) not NULL ,
  `food_item_id`  varchar(6),
  `completed` VARCHAR(5) DEFAULT 'no',

);

--- important *****
CREATE  TABLE  `processed_order`(
  `order_id` INT NOT NULL PRIMARY key,
  `customer` VARCHAR (50),
  `price` NUMERIC(8,2) not NULl, 
  `order_date`  DATE,
  `delivered` VARCHAR(5) DEFAULT 'no',
  `delivery_person` VARCHAR(50) DEFAULT NULL 

);


