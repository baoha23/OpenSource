// Require module mysql
const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'baoha',
  password: '23062002',
  database: 'quanlynguoidung'
});

// Connect to the database
connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected to the database!');
});
