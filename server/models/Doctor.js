const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/doctor/:doctorId/schedule', async (req, res) => {
    const { doctorId } = req.params;
    try {
        const [schedules] = await pool.query(`
            SELECT s.day_of_week, s.start_time, s.end_time, sd.detail_type, sd.detail_value
            FROM schedules s
            LEFT JOIN schedule_details sd ON s.id = sd.schedule_id
            WHERE s.doctor_id = ?
        `, [doctorId]);

        if (!schedules.length) {
            return res.status(404).json({ message: 'Schedule not found' });
        }

        res.status(200).json(schedules);
    } catch (error) {
        console.error('Error fetching schedule:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
