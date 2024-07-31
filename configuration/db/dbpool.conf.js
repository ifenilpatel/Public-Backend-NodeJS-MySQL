const mysql = require("mysql2");

// Create a MySQL connection pool
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_TITLE,
    password: process.env.DATABASE_PASSWORD,
    multipleStatements: true,
});

// Verify the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Database connected successfully");
    connection.release();
});

module.exports = pool;
