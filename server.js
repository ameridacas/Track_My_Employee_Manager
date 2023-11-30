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

// Create employee routes
router.get('/employees', async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM employee');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific employee by ID
router.get('/employees/:id', async (req, res) => {
  const employeeId = req.params.id;

  try {
    const [rows] = await db.promise().query('SELECT * FROM employee WHERE id = ?', [employeeId]);

    if (rows.length === 0) {
      res.status(404).json({ error: 'Employee not found' });
    } else {
      res.json(rows[0]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new employee
router.post('/employees', async (req, res) => {
  const { first_name, last_name, role_id, manager_id } = req.body;

  try {
    await db.promise().query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
    res.json({ success: true, message: 'Employee created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update an existing employee
router.put('/employees/:id', async (req, res) => {
  const employeeId = req.params.id;
  const { first_name, last_name, role_id, manager_id } = req.body;

  try {
    await db.promise().query('UPDATE employee SET first_name = ?, last_name = ?, role_id = ?, manager_id = ? WHERE id = ?', [first_name, last_name, role_id, manager_id, employeeId]);
    res.json({ success: true, message: 'Employee updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete an employee
router.delete('/employees/:id', async (req, res) => {
  const employeeId = req.params.id;

  try {
    await db.promise().query('DELETE FROM employee WHERE id = ?', [employeeId]);
    res.json({ success: true, message: 'Employee deleted successfully' });
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
