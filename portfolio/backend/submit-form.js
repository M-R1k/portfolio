const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:3000"}));
app.use(express.json());

const dbConfig = {
    host: "localhost",
    user: "aymeric",
    password: "V12345maj",
    database: "portfolio_contact_form_db",
};

app.post("/submit-form", async(req, res) => {
    const { firstName, lastName, company, email, phoneNumber, message } = req.body;

    if(!firstName || !lastName || !email || !message) {
        return res.status(400).json({ success: false, message: "Invalid datas."});
    }

    try {
        const connection = await mysql.createConnection(dbConfig);

        const query = `
        INSERT INTO contact_form_submissions
        (first_name, last_name, company, email, phone_number, message)
        VALUES (?, ?, ?, ?, ?, ?)
        `;

        await connection.execute(query, [firstName, lastName, company, email, phoneNumber, message]);
        await connection.end();

        res.json({ success: true, message: "Message sent."});
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Error."})
    }
});

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
})