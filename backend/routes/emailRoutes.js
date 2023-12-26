const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();



const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    console.log(req.body)
    console.log("email", email);
  
    const mailOptions = {
        from: `${email}`,
        to: process.env.RECEIVING_EMAIL, 
        subject: `New Contact Form Submission from ${name}`,
        text: message,
      };
      
    try {
      await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            reject(error);
          } else {
            resolve(info);
          }
        });
      });
      res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending message.' });
    }
  });

module.exports = router;
