// CONTROLLER:

// Imports/require & selectors
const router = require('express').Router();
const coins = require('../models/coins.js');

// Coin Index Route
router.get('/', (req, res) => {
    res.render('/coins/index');
});




// Exports
module.exports = router;