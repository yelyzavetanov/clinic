const express = require('express');
const router = express.Router();
const Schedule = require('../models/Schedule');

// Middleware for token verification (optional)
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send({ message: 'No token provided.' });

    // Token verification logic here
    // jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    //     if (err) return res.status(500).send({ message: 'Failed to authenticate token.' });
    //     req.userId = decoded.id;
    //     next();
    // });

    next(); // Remove this line if using actual token verification
};

// Get schedule by doctor's username
router.get('/:doctorUsername', authenticateToken, async (req, res) => {
    const { doctorUsername } = req.params;
    try {
        const schedule = await Schedule.getByDoctorUsername(doctorUsername);
        res.json(schedule);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add new reception
router.post('/', authenticateToken, async (req, res) => {
    const newReception = req.body;
    try {
        await Schedule.addReception(newReception);
        res.status(201).json({ message: 'Reception added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Mark reception
router.put('/:id', authenticateToken, async (req, res) => {
    const {id} = req.params;
    const {newStatus} = req.body;

    console.log('Request body:', req.body); // Налагоджувальний вивід
    console.log('ID:', id);
    console.log('New status:', newStatus);

    try {
        await Schedule.markReception(id, newStatus);
        res.status(200).json({ message: 'Reception status updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
