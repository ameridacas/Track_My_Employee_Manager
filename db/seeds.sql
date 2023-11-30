INSERT INTO department (name)
VAlUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");
       ("HR");

INSERT INTO role (title, salary, department_id)
VALUES (1, "Sales Lead", 100000),
       (2, "SalesConsultant", 80000),
       (3, "Lead Engineer", 150000),
       (4, "Software Engineer", 120000),
       (5, "Accountant", 125000),
       (6, "Financial Analyst", 90000),
       (7, "Paralegal", 80000),
       (8, "Lawyer", 190000),
       (9, "HR Supervisor", 150000),
       (10, "HR Assistant", 100000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (01, "John", "Doe", 1, NULL),
       (02, "Jane", "Doe", 2, 1),
       (03, "Bob", "Smith", 3, NULL),
       (04, "Joe", "Smith", 4, 3),
       (05, "Sally", "Fields", 5, NULL),
       (06, "Sam", "Fields", 6, 5),
       (07, "Sue", "Johnson", 7, NULL),
       (08, "Sara", "Johnson", 8, 7),
       (09, "Bill", "Williams", 9, NULL),
       (10, "Ben", "Williams", 10, 9);
       
