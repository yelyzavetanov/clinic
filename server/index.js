const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

app.get("/", (req, res) => {
    return res.json("backend");
})

app.get("/test", (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(PORT, () => console.log(`backend is running on port ${PORT}`));