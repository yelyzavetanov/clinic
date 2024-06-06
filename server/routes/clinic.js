const express = require('express');
const router = express.Router();
const Clinic = require('../models/Clinic');

router.get('/', async (req, res) => {
    try {
        const clinics = await Clinic.getAll();
        res.status(200).json(clinics);
    } catch (error) {
        console.error('Error fetching clinics:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

/*router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const clinic = await Clinic.getById(id);
        if (!clinic) {
            return res.status(404).json({ message: 'Clinic not found' });
        }
        res.status(200).json(clinic);
    } catch (error) {
        console.error('Error fetching clinic:', error);
        res.status(500).json({ message: 'Server error' });
    }
});*/

router.get('/:clinicName', async (req, res) => {
    const { clinicName } = req.params;
    try {
        const clinic = await Clinic.findByName(clinicName);
        if (!clinic) {
            return res.status(404).json({ message: 'Clinic not found' });
        }
        res.status(200).json(clinic);
    } catch (error) {
        console.error('Error fetching clinic:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/register', async (req, res) => {
    const {id, name, address, specialization, description } = req.body;
    try {
        const existingClinic = await Clinic.findByName(name);
        if (existingClinic) {
            return res.status(400).json({ message: 'Clinic with this name already exists' });
        }

        const clinicId = await Clinic.create(id, name, address, specialization, description);
        const newClinic = await Clinic.getById(clinicId);
        res.status(201).json(newClinic);
    } catch (error) {
        console.error('Error registering clinic:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, address, specialization, description } = req.body;
    try {
        await Clinic.update(id, name, address, specialization, description);
        const updatedClinic = await Clinic.getById(id);
        res.status(200).json(updatedClinic);
    } catch (error) {
        console.error('Error updating clinic:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
