// DEPENDENCIES
const express = require('express');
const coins = express.Router();
const db = require('../models/coins.js')


// // fetch request (coingecko api)
// coins.get('/', (req, res) => {
// //     fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=1000&page=1&sparkline=false', {
// //     method: 'GET',
// //     headers: {
// //         'Content-Type': 'application/json'
// //     },
// //     body: JSON.stringify (
// //         {
// //             name: 'User 1'
// //         })
        
// // })
// //     .then(res => {
// //         res.ok ? console.log('SUCCESS!') : console.log("NOT SUCCESSFUL!")
// //         return res.json()
// //     })
// //     .then(data => console.log(data))
// //     .catch(error => console.log('ERROR 404 NOT FOUND!'));
//     res.render('index');
// });




// INDEX PAGE ROUTE 
coins.get('/', (req, res) => {
    res.render('index', {
        coins: db // adding the data from models/coins.js inside index page, as an object we can add as many keys as we want for the data to show.
    });
    // res.send(db) // made first to show models/coins.js but than we made an actual index views page to render instead.
});



// New Coin Route (Read Route)
coins.get('/new', (req, res) => {
    res.render('new')
});


// ADD NEW COIN ROUTE (Create Route) ---> (has to be placed above show route)
coins.post('/', (req, res) => {
    console.log(req.body)
    res.redirect('/coins')
});


// SHOW ROUTE (Read Route)
coins.get('/:arrayIndex', (req, res) => {
    // res.send(db[req.params.arrayIndex]) // was done first to list data before we made a show page
    res.render('show', {
        coins: db[req.params.arrayIndex]
    });
});


// DELETE ROUTE
coins.delete('/:indexArray', (req, res) => {
    db.splice(req.params.indexArray, 1)
    res.status(303).redirect('/coins')
});



// EXPORTS
module.exports = coins;