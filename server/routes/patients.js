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

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, problems, treatment, birth_date } = req.body;
    try {
        const result = await Patient.update(id, name, description, problems, treatment, birth_date);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json({ message: 'Patient updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Patient.delete(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json({ message: 'Patient deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;