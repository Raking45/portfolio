const db = require('../db/database');

// Save All Messages
function saveMessage({ name, email, message }) {
  const stmt = db.prepare(`INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`);
  stmt.run(name, email, message);
}

// Retrieve All Messages
function getMessages() {
  const stmt = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC');
  return stmt.all();
}

module.exports = { saveMessage, getMessages };