const pool = require('../db');

class Schedule {
    static async getByDoctorUsername(doctorUsername) {
        const query = 'SELECT * FROM receptions WHERE doctor_username = ?';
        const [result] = await pool.query(query, [doctorUsername]);
        return result;
    }

    static async addReception(newReception) {
        const query = 'INSERT INTO receptions (doctor_username, date, time, patient_name, status) VALUES (?, ?, ?, ?, ?)';
        const [result] = await pool.query(query, [
            newReception.doctor_username,
            newReception.date,
            newReception.time,
            newReception.patient_name,
            newReception.status
        ]);
        return result;
    }

    static async markReception(id, updatedData) {
        const query = 'UPDATE receptions SET status = ? WHERE id = ?';
        const [result] = await pool.query(query, [updatedData.status, id]);
        return result;
    }
}

module.exports = Schedule;
