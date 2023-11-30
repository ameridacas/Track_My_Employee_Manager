SELECT department.name AS department, role.title, role.salary
FROM role
LEFT JOIN department 
ON role.department_id = department.id;
ORDER BY department.name;

SELECT role.title, role.salar,role.department_id AS role, employee.first_name, employee.last_name
FROM employee
LEFT JOIN role
ON employee.role_id = role.id;
ORDER BY role.title;

SELECT employee.first_name, employee.last_name, employee.manager_id 
from employee
JOIN employee
ON employee.manager_id = employee.id;
ORDER BY employee.manager_id;


