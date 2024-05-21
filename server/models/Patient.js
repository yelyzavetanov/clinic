const pool = require('../db');

class Patient {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM patients');
        return rows;
    }

    static async add(id, name, description, problems, treatment, birth_date) {
        const query = 'INSERT INTO patients (id, name, description, problems, treatment, birth_date) VALUES (?, ?, ?, ?, ?, ?)';
        const [result] = await pool.query(query, [id, name, description, problems, treatment, birth_date]);
        return result;
    }
}

module.exports = Patient;
