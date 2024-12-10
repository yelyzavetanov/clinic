const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clinic',

    // host: 'if0_36755545_clinic',
    // user: 'if0_36755545',
    // password: 'Buzia549',
    // database: 'if0_36755545_clinic',

    // host: 'localhost',
    // user: 'admin',
    // password: 'admin',
    // database: 'clinic',

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;
