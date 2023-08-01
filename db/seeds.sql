INSERT INTO department (id, name)
VALUES
    (1, 'HR'),
    (2, 'Finance'),
    (3, 'IT'),
    (4, 'Marketing');

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, 'HR Manager', 60000.00, 1),
    (2, 'HR Specialist', 40000.00, 1),
    (3, 'Finance Manager', 70000.00, 2),
    (4, 'Finance Analyst', 50000.00, 2),
    (5, 'Software Engineer', 80000.00, 3),
    (6, 'Database Administrator', 75000.00, 3),
    (7, 'Marketing Manager', 65000.00, 4),
    (8, 'Marketing Coordinator', 45000.00, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'John', 'Doe', 1, NULL),
    (2, 'Jane', 'Smith', 2, 1),
    (3, 'Michael', 'Johnson', 3, NULL),
    (4, 'Emily', 'Williams', 4, 3),
    (5, 'David', 'Brown', 5, NULL),
    (6, 'Jessica', 'Lee', 6, 5),
    (7, 'Richard', 'Taylor', 7, NULL),
    (8, 'Emma', 'Martin', 8, 7);
