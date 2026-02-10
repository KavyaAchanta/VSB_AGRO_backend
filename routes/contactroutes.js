const express = require("express");
const router = express.Router();
const transporter = require("../config/mailer");

router.post("/", async (req, res) => {
  const { name, phone, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Website Enquiry",
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
