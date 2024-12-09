// Import MySQL library
const mysql = require("mysql2");

// Load environment variables
require("dotenv").config();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Database host from .env
  user: process.env.DB_USER, // Database user from .env
  password: process.env.DB_PASSWORD, // Database password from .env
  database: process.env.DB_NAME, // Database name from .env
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
    process.exit(1); // Exit the application if the connection fails
  } else {
    console.log("Connected to MySQL database successfully!");
  }
});

// Export the connection
module.exports = connection;
