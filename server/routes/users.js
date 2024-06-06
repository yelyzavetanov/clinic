const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.getAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:clinicName', async (req, res) => {
    const { clinicName } = req.params;
    try {
        const users = await User.getDoctors(clinicName);
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const { token, user } = await User.logIn(username, password);
        res.json({ token, user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { id, username, password, name, clinic, status, specialization, description } = req.body;
        if (!id || !username || !password || !name || !clinic || !status || !specialization || !description) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await User.findByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: 'User with this username already exists' });
        }

        const result = await User.signUp(id, username, password, name, clinic, status, specialization, description);
        res.status(201).json({ message: 'User created successfully', result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/:username', async (req, res) => {
    const { username } = req.params;
    const { name, specialization, description } = req.body;
    console.log(req.body);
    try {
        await User.update(username, name, specialization, description);

        const updatedUser = await User.findByUsername(username);

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;