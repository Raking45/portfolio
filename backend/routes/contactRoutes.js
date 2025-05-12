const express = require('express');
const router = express.Router();
const contactModel = require('../models/contactModel');

// Get All Contact Messages
router.get('/messages', (req, res) => {
  try {
    const messages = contactModel.getMessages();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages.' });
  }
});

module.exports = router;