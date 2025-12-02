// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// POST /send-email
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ msg: 'All fields are required' });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
        port: process.env.SMTP_PORT, // e.g., 465
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER, // your email
            pass: process.env.SMTP_PASS, // your email password or app password
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.CONTACT_RECEIVER, // your business email
        subject: subject,
        text: message,
        html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ msg: 'Email sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
