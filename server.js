// Imports/requires & selectors
const express = require('express');
const methodOverride = require('method-override');

const app = express();

// Config.
require('dotenv').config();
const PORT = process.env.PORT

// Middleware
app.set('views', __dirname + '/views'); // grabs the views folder files.
app.set('view engine', 'jsx'); // sets view engine to JSX
app.engine('jsx', require('express-react-views').createEngine()); // requires REACT
app.use(express.static('public')); // access to public folder
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// coin_controller
app.use('/coins', require('./controllers/coin_controller'));

// Home page
app.get('/', function(req, res) {
    res.render('home')
});

// Server listen
app.listen(PORT, () => {
    console.log('Whats up my duuuuude?!')
});