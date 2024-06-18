// routes/schedule.js
const express = require('express');
const router = express.Router();
const { getScheduleByDoctorId } = require('../models/Doctor');

router.get('/doctor/:doctorId/schedule', async (req, res) => {
    const { doctorId } = req.params;
    try {
        const schedules = await getScheduleByDoctorId(doctorId);

        if (!schedules.length) {
            return res.status(404).json({ message: 'Schedule not found' });
        }

        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
