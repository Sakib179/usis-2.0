const mysql = require('mysql2/promise');

// Create a connection to the database
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Database host
  user: process.env.DB_USER_ID, // Database user
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME, // Database name
  waitForConnections: true,
  connectionLimit: 10, // Adjust as per your requirements
  queueLimit: 0 // Unlimited queued connections
});

module.exports = { pool }