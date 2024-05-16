const express = require('express');
const Patient = require("../models/Patient");

const router = express.Router();

// Отримати всіх пацієнтів
router.get('/', async (req, res) => {
    try {
        const patients = await Patient.getAll();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;