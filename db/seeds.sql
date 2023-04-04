USE ;
INSERT INTO department(name)
VALUES('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary)
VALUES('Account Manager', 80000), ('Sales Lead', 75000), ('Software Engineer', 120000), ('Accountant', 90000), ('Lawyer', 130000), ('Salesperson', 700000), ('Engineer', 123000);

INSERT INTO employee (first_name, last_name, role_id)
VALUES 
('Cameron', 'Brooks', 2), 
('Blake', 'Rhodes', 1),
('Sienna', 'St.Clair', 3),
('Veronica','Matthews', 2 ),
('Nicolas', 'Peters', 4),
('Gwen', 'Wilson', 6),
('Dylan', 'Harding', 3),
('Madison', 'Carter', 5),
('Luke', 'Buckley', 1),
('Austin', 'Fowler', 2),
('Tristen', 'Anderson', 5),
('Kendall', 'Parks', 3),
('Jason', 'Lindsey', 1),
('Max','Hunter', 6);