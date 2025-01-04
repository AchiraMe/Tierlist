const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// API Endpoint
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM your_table', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.status(200).json(results);
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
