require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Email Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify Email Configuration
transporter.verify((error) => {
  if (error) {
    console.error("Error configuring email:", error);
  } else {
    console.log("Email service ready to send emails");
  }
});

// API Endpoint for Contact Form
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: `${firstName} ${lastName} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message" });
    } else {
      console.log("Message sent:", info.response);
      res.status(200).json({ status: "Message Sent" });
    }
  });
});

// Start Server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
