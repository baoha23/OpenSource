
		// Import module mysql
		const mysql = require('mysql');

		// Tạo kết nối đến csdl mysql
		const connection = mysql.createConnection({
            host: 'localhost',
            user: 'baoha',
            password: '23062002',
            database: 'quanlynguoidung'
		});

		// Mở kết nối
		connection.connect();

		// Truy vấn dữ liệu từ csdl
		connection.query('SELECT * FROM benhnhan', (error, results) => {
			if (error) {
				console.error(error);
				return;
			}

			// Lặp qua kết quả và hiển thị trên HTML
			results.forEach((row) => {
				const tr = document.createElement('tr');
				const td1 = document.createElement('td');
				const td2 = document.createElement('td');
				td1.textContent = row.name;
				td2.textContent = row.age;
				tr.appendChild(td1);
				tr.appendChild(td2);
				document.getElementById('data').appendChild(tr);
			});

			// Đóng kết nối
			connection.end();
		});