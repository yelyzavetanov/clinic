const pool = require('../db');

class Patient {
    static async getAll(clinicName) {
        const query = 'SELECT * FROM patients WHERE clinic = ?';
        const [result] = await pool.query(query, [clinicName]);
        return result;
    }

    static async add(id, name, description, problems, treatment, birth_date, clinic) {
        const query = 'INSERT INTO patients (id, name, description, problems, treatment, birth_date, clinic) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [result] = await pool.query(query, [id, name, description, problems, treatment, birth_date, clinic]);
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
