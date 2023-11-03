const db = mysql.createConnection({
  host: 'localhost',
  user: 'baoha',
  password: '23062002',
  database: 'quanlynguoidung'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Kết nối CSDL thành công!');
});
const patientForm = document.getElementById('patient-form');

patientForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const patientName = document.getElementById('patient_name').value;
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const address = document.getElementById('address').value;

  const sql = `INSERT INTO patients (patient_name, age, gender, address) VALUES ('${patientName}', '${age}', '${gender}', '${address}')`;

  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('Đã lưuthông tin bệnh nhân thành công!');
  });
});