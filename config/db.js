

import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();




// connection of mys
const pool = mysql.createPool({
 host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT 
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error(' MySQL connection failed:', err.message);
  } else {
    console.log(' MySQL connected successfully!');
    connection.release(); // return connection to pool
  }
});



// export the connection
export default pool;
