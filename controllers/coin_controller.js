// DEPENDENCIES
const express = require('express');
const coins = express.Router();
const db = require('../models/coins.js')


// INDEX PAGE ROUTE 
coins.get('/', (req, res) => {
    res.send(db);
});


// SHOW ROUTE (Read Route)
coins.get('/:arrayIndex', (req, res) => {
    res.send(db[req.params.arrayIndex])
})



// EXPORTS
module.exports = coins;