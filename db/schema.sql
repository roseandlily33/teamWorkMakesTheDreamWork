CREATE IF NOT EXISTS ;
USE ;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    --dept_name roegin key
)

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    --role_id FOREIGN KEY,
    --foreign key for role id 
    manager_id INT, --prinkary key for the id of the employee
)


-- DO the primary and foregin keys 
