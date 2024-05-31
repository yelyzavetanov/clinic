const express = require('express');
const cors = require('cors');
const patientRoutes = require("./routes/patients");
const userRoutes = require("./routes/users");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/patients', patientRoutes);
app.use('/users', userRoutes);