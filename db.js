const mysql = require('mysql');
const conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'ATB-Quickscan',
  charset: 'utf8mb4',
   
});

 conn.getConnection((err) => {
  if (err) 
  console.log('DB Connected!')
})

 module.exports = conn 