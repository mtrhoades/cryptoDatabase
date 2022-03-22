// Imports/requires & selectors
const express = require('express');
const app = express();

// Config.
require('dotenv').config();
const PORT = process.env.PORT

// Home page
app.get('/', function(req, res) {
    res.send('Hello World!')
});

// Server listen
app.listen(PORT, () => {
    console.log('Whats up my duuuuude?!')
});