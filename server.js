const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'Laloh247_',
    database: '_db'
  },
  console.log(`Connected to the _db database.`)
);

// Department routes
app.get('/api/departments', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM department');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/departments', async (req, res) => {
  const { name } = req.body;

  try {
    await db.promise().query('INSERT INTO department (name) VALUES (?)', [name]);
    res.json({ success: true, message: 'Department created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Role routes
app.get('/api/roles', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM role');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/roles', async (req, res) => {
  const { title, salary, department_id } = req.body;

  try {
    await db.promise().query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
    res.json({ success: true, message: 'Role created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Employee routes
app.get('/api/employees', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM employee');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/employees', async (req, res) => {
  const { first_name, last_name, role_id, manager_id } = req.body;

  try {
    await db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
    res.json({ success: true, message: 'Employee created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});