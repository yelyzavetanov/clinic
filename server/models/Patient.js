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

    static async update(id, name, description, problems, treatment, birth_date) {
        const query = 'UPDATE patients SET name = ?, description = ?, problems = ?, treatment = ?, birth_date = ? WHERE id = ?';
        const [result] = await pool.query(query, [name, description, problems, treatment, birth_date, id]);
        return result;
    }

    static async delete(id) {
        const query = 'DELETE FROM patients WHERE id = ?';
        const [result] = await pool.query(query, [id]);
        return result;
    }
}

module.exports = Patient;
