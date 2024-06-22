const express = require('express');
const cors = require('cors');
const patientRoutes = require("./routes/patients");
const userRoutes = require("./routes/users");
const clinicRoutes = require("./routes/clinic");
const scheduleRoutes = require("./routes/schedule");
const path = require('path');
require('dotenv').config();

const app = express();

// app.use(cors({origin: '*', credentials: true}));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Або '*' якщо дозволяєте доступ з будь-якої адреси
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/patients', patientRoutes);
app.use('/users', userRoutes);
app.use('/api/clinic', clinicRoutes);
app.use('/schedule', scheduleRoutes);