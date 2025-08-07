// config/db.js

import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();

// connection of mys
const pool = mysql.createPool({
  host: process.env.localhost,
  user: process.env.root,
  password: process.env.root,
  database: process.env.school_managment 
});

// export the connection
export default pool;
