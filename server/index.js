const express = require('express');
const cors = require('cors');
const patientRoutes = require("./routes/patients");
const userRoutes = require("./routes/users");
const clinicRoutes = require("./routes/clinic");
const scheduleRoutes = require("./routes/schedule");
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/patients', patientRoutes);
app.use('/users', userRoutes);
app.use('/clinic', clinicRoutes);
app.use('/schedule', scheduleRoutes);