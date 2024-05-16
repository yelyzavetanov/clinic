const pool = require('../db');

class Patient {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM patients');
        return rows;
    }
}

module.exports = Patient;
