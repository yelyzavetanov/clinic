const pool = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class User {
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    }

    static async getDoctors(clinicName) {
        const query = 'SELECT * FROM users WHERE clinic = ? AND status = "doctor"';
        const [rows] = await pool.query(query, [clinicName]);
        return rows;
    }

    static async findByUsername(username) {
        const query = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await pool.query(query, [username]);
        const user = rows[0];

        return user;
    }

    static async logIn(username, password) {
        const query = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await pool.query(query, [username]);
        const user = rows[0];

        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            // { expiresIn: '1h' }
        );

        return { token, user };
    }

    static async signUp(id, username, password, name, clinic, status, specialization, description) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (id, username, password, name, clinic, status, specialization, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const [result] = await pool.query(query, [id, username, hashedPassword, name, clinic, status, specialization, description]);
        return result;
    }

    static async update(username, name, specialization, description) {
        // const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'UPDATE users SET name = ?, specialization = ?, description = ? WHERE username = ?';
        const [result] = await pool.query(query, [name, specialization, description, username]);
        return result;
    }

    static async delete(username) {
        const query = 'DELETE FROM users WHERE username = ?';
        const [result] = await pool.query(query, [username]);
        return result;
    }
}

module.exports = User;