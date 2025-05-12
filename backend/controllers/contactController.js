const { saveContact } = require('../models/contactModel');

exports.submitContactForm = (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.'});
    }

    saveContact({ name, email, message });
    return res.status(200).json({ message: 'Message saved successfully.'});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error.'});
  }
};