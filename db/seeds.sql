USE company_db;

INSERT INTO department (dept_name)
VALUES('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('Account Manager', 80000, 1), 
('Sales Lead', 75000, 1), 
('Software Engineer', 120000, 1), 
('Accountant', 90000, 1), 
('Lawyer', 130000, 1), 
('Salesperson', 700000, 1), 
('Engineer', 123000, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
('Cameron', 'Brooks', 1, null), 
('Blake', 'Rhodes', 1, null),
('Sienna', 'St.Clair', 1, null),
('Veronica','Matthews', 1, null),
('Nicolas', 'Peters', 1, null),
('Gwen', 'Wilson', 1, null),
('Dylan', 'Harding', 1, null),
('Madison', 'Carter', 1, null),
('Luke', 'Buckley', 1, null),
('Austin', 'Fowler', 1, null),
('Tristen', 'Anderson', 1, null),
('Kendall', 'Parks', 1, null),
('Jason', 'Lindsey', 1, null),
('Max', 'Hunter', 1, null);