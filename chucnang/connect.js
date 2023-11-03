const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'baoha',
    password: '23062002',
    database: 'quanlynguoidung'
  });

// Hiển thị danh sách các bệnh nhân và cho phép người dùng nhập thông tin mới
app.get('/', (req, res) => {
    connection.query('SELECT * FROM patients', (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.render('index', { benhnhan: results });
      }
    });
  });

// Hiển thị thông tin chi tiết của một bệnh nhân
app.get('/benhnhan/:id',(req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM patients WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.render('benhnhan', { benhnhan: results[0] });
    }
  });
});

// Lưu trữ thông tin bệnh nhân vào cơ sở dữ liệu khi người dùng nhập thông tin mới
app.post('/patient', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const address = req.body.address;
  connection.query('INSERT INTO patients (name, age, address) VALUES (?, ?, ?)', [name, age, address], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.redirect('/');
    }
  });
});
