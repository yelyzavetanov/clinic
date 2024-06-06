const pool = require('../db');

class Clinic {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM clinics');
        return rows;
    }

    static async getById(id) {
        const [rows] = await pool.query('SELECT * FROM clinics WHERE id = ?', [id]);
        return rows[0];
    }

    static async findByName(name) {
        const query = 'SELECT * FROM clinics WHERE name = ?';
        const [rows] = await pool.query(query, [name]);
        return rows[0];
    }

    static async create(id, name, address, description, specialization) {
        const query = 'INSERT INTO clinics (id, name, address, description, specialization) VALUES (?, ?, ?, ?, ?)';
        const [result] = await pool.query(query, [id, name, address, description, specialization]);
        return result.insertId;
    }

    static async update(id, name, address, description, specialization) {
        const query = 'UPDATE clinics SET name = ?, address = ?, description = ?, specialization = ? WHERE id = ?';
        const [result] = await pool.query(query, [name, address, description, specialization, id]);
        return result;
    }
}

module.exports = Clinic;
