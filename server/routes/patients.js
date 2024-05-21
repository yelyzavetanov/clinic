const express = require('express');
const Patient = require("../models/Patient");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const patients = await Patient.getAll();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    const { id, name, description, problems, treatment, birth_date } = req.body;

    if (!id || !name || !description || !problems || !treatment || !birth_date) {
        return res.status(400).json({ error: 'Name, age, and address are required' });
    }

    try {
        const result = await Patient.add(id, name, description, problems, treatment, birth_date);
        res.status(201).json({ message: 'New patient added', patientId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;