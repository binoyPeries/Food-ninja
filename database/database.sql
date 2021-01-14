CREATE TABLE `employee` (
  `employee_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `employee_name` varchar(30) NOT NULL,
  `job_post` varchar(50) NOT NULL,
  `contact_number` int NOT NULL
);

CREATE TABLE `food_item` (
  `food_item_id` VARCHAR (30) PRIMARY KEY,
  `food_item_name` varchar(30) NOT NULL,
  `price` NUMERIC (6,2) NOT NULL,
  `description` varchar(100) NOT NULL,
  `calorie_amount` int NOT NULL,
  `image` blob 
);