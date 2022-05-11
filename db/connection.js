
const db = require('mysql2-promise')();

db.configure({
  host: 'localhost',

  // MySQL username,
  user: 'root',

  // MySQL password
  password: 'Bas2022@!',

  // enter database info
  database: 'SocNet'
});

module.exports = db;