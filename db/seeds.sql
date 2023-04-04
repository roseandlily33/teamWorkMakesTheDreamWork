USE company_db;

INSERT INTO department(dept_name)
VALUES('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Account Manager', 80000, 1), 
('Sales Lead', 75000, 2), 
('Software Engineer', 120000, 3), ('Accountant', 90000, 4), 
('Lawyer', 130000, 5), 
('Salesperson', 700000, 6), 
('Engineer', 123000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Cameron', 'Brooks', 7, null), 
('Blake', 'Rhodes', 1, null),
('Sienna', 'St.Clair', 3, 5),
('Veronica','Matthews', 2, null ),
('Nicolas', 'Peters', 4, 3),
('Gwen', 'Wilson', 6, 3),
('Dylan', 'Harding', 3, null),
('Madison', 'Carter', 5, null),
('Luke', 'Buckley', 1, 2),
('Austin', 'Fowler', 2, 2),
('Tristen', 'Anderson', 5, null),
('Kendall', 'Parks', 3, 4),
('Jason', 'Lindsey', 1, null),
('Max', 'Hunter', 6, 2);