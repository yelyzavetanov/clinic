const express = require('express');
const cors = require('cors');
const patientRoutes = require("./routes/patients");
const userRoutes = require("./routes/users");
const clinicRoutes = require("./routes/clinic");
const scheduleRoutes = require("./routes/schedule");
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//// });


const PORT = process.env.PORT || 5000;

// Налаштування статичних файлів з папки 'build'
// app.use(express.static(path.join(__dirname, 'build')));

// Обслуговування головної сторінки для всіх запитів
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
//
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/patients', patientRoutes);
app.use('/users', userRoutes);
app.use('/clinic', clinicRoutes);
app.use('/schedule', scheduleRoutes);