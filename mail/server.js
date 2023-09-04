// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// ...

// Middleware



const app = express();
const PORT =3005; // You can use any available port

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint to handle form submission and email sending
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter with your SMTP configuration
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'n180491@rguktn.ac.in', // Replace with your Gmail email
      pass: 'Chax@143', // Replace with your Gmail password
    },
  });

  const mailOptions = {
    from: 'n180491@rguktn.ac.in', // Replace with your Gmail email
    to: 'lovachakravarthi@gmail.com', // Replace with the recipient's email address
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    } else {
      console.log('Email sent successfully!', info);
      res.json({ success: true, message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
