const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ตั้งค่าการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
  host: 'localhost', // หรือ IP เซิร์ฟเวอร์
  port: 3306,        // พอร์ตที่ฐานข้อมูลทำงาน
  user: 'lemansturismo_User',
  password: 'DDob2&G*FW$gHr',
  database: 'lemansturismo_TEST',
});

// เชื่อมต่อกับฐานข้อมูล
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');
  }
});

// ตัวอย่าง API สำหรับ Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length > 0) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid email or password' });
    }
  });
});

// เริ่มต้นเซิร์ฟเวอร์
const PORT = 5000; // สามารถเปลี่ยนพอร์ตตามความต้องการ
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
