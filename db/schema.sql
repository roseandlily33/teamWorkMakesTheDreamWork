DROP DATABASE company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT,
    department_id INT, 
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES roles(id),
    CONSTRAINT fk_manager FOREIGN KEY(manager_id) REFERENCES employee(id)
);



