// models/Doctor.js
const pool = require('../db');
const bcrypt = require("bcrypt");


class Doctor {
    static async getScheduleByDoctorId(doctorId) {
        try {
            const [schedules] = await pool.query(`
                SELECT s.day_of_week, s.start_time, s.end_time, sd.detail_type, sd.detail_value
                FROM schedules s
                         LEFT JOIN schedule_details sd ON s.id = sd.schedule_id
                WHERE s.doctor_id = ?
            `, [doctorId]);

            return schedules;
        } catch (error) {
            console.error('Error fetching schedule:', error);
            throw error;
        }
    }

    static async addDoctor(id, username, password, name, clinic, status, specialization, description) {
        const query = 'INSERT INTO doctors (id, username, name, clinic, status, specialization, description) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const [result] = await pool.query(query, [id, username, name, clinic, status, specialization, description]);
        return result;
    }
}

module.exports = {
    Doctor,
};
