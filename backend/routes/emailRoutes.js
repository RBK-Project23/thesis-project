const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log(req.body);
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
    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending message." });
  }
});

router.post("/", async (req, res) => {
  console.log(req.body);
  console.log("Sending pending email to:", req.body.userEmail);

  //mailOptions.to = "jemailanis@yahoo.fr";

  const { userEmail, userName } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: `Your Account Confirmation`,
    text: `Dear ${userName},\n\nYour account has been successfully confirmed. You can now log in to the site via the following link:\nhttp://localhost:3000/home\n\nBest regards,\nTunisian Scouts in the Sultanate of Oman`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email." });
  }
});

module.exports = router;
