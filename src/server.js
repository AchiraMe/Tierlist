const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // For parsing application/json

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
  host: process.env.DB_HOST, // ตัวอย่าง: 'your-plesk-db-host'
  user: process.env.DB_USER, // ชื่อผู้ใช้
  password: process.env.DB_PASSWORD, // รหัสผ่าน
  database: process.env.DB_NAME, // ชื่อฐานข้อมูล
});

// เชื่อมต่อกับฐานข้อมูล
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to Plesk Database');
});

// สร้าง API ตัวอย่าง
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users'; // ตัวอย่าง: ตาราง users
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Server เริ่มทำงาน
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
