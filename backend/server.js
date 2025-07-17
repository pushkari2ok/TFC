import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { transporter, mailOptions } from './nodemailerConfig.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🔹 Route for Franchise Form
app.post('/api/send-email', async (req, res) => {
  const { name, contact, email, area, address, message, budget } = req.body;

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Franchise Inquiry",
      html: `
        <h2>Franchise Inquiry Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Area:</strong> ${area}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Budget:</strong> ${budget}</p>
      `
    });

    res.status(200).json({ message: 'Franchise email sent successfully!' });
  } catch (err) {
    console.error('Franchise Email Error:', err);
    res.status(500).json({ message: 'Failed to send franchise email.' });
  }
});

// 🔹 Route for Contact Form
app.post('/api/contact', async (req, res) => {
  const { user_name, user_email, user_phone, user_address, reason, message } = req.body;

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New Contact Form Submission",
      html: `
        <h2>Contact Form Details</h2>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${user_phone}</p>
        <p><strong>Address:</strong> ${user_address}</p>
        <p><strong>Reason:</strong> ${reason}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    res.status(200).json({ message: 'Contact email sent successfully!' });
  } catch (err) {
    console.error('Contact Email Error:', err);
    res.status(500).json({ message: 'Failed to send contact email.' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
