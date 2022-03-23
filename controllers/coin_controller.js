// DEPENDENCIES
const express = require('express');
const coins = express.Router();
const db = require('../models/coins.js')


// INDEX PAGE ROUTE 
coins.get('/', (req, res) => {
    res.render('index', {
        coins: db // adding the data from models/coins.js inside index page, as an object we can add as many keys as we want for the data to show.
    })
    // res.send(db) // made first to show models/coins.js but than we made an actual index views page to render instead.
});


// SHOW ROUTE (Read Route)
coins.get('/:arrayIndex', (req, res) => {
    res.send(db[req.params.arrayIndex])
})



// EXPORTS
module.exports = coins;