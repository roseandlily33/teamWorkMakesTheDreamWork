USE company_db;

INSERT INTO department (dept_name)
VALUES
('Sales'), ('Engineering'), 
('Finance'), ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Account Manager', 80000, 3), 
('Sales Lead', 75000, 1), 
('Software Engineer', 120000, 2), 
('Accountant', 90000, 3), 
('Lawyer', 130000, 4), 
('Salesperson', 700000, 1), 
('Engineer', 123000, 2);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('Cameron', 'Brooks', 1, null), 
('Blake', 'Rhodes', 2, null),
('Veronica','Matthews', 3, null),
('Nicolas', 'Peters', 4, 1),
('Gwen', 'Wilson', 5, null),
('Dylan', 'Harding', 6, 2),
('Madison', 'Carter', 7, 3);
