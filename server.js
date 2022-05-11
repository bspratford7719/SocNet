const express = require('express');
const db = require('')
const app = express();
const PORT = process.env.PORT || 3001;



app.use(require('./routes'));

