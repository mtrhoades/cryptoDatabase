// DEPENDENCIES:
const express = require('express'); // require express framework
const methodOverride = require('method-override'); // Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
const mongoose = require('mongoose');


// CONFIG. & VARIABLES
require('dotenv').config(); // requires configuration for .env file.
const PORT = process.env.PORT // variable for .env file for specified port #.
const app = express(); // variable for the web application
const MONGO_URI = process.env.MONGO_URI;


// MIDDLEWARE:
app.set('views', __dirname + '/views'); // grabs the views folder files.
app.engine('jsx', require('express-react-views').createEngine()); // requires REACT for JSX
app.set('view engine', 'jsx'); // sets view engine to JSX for view files
app.use(express.static('public')); // access to public folder for css and images
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
);


// CONTROLLER ROUTE (/coins)
const coinsController = require('./controllers/coin_controller.js');
app.use('/coins', coinsController);


// Login Page Route
app.get('/', (req, res) => {
    res.render('login')
});



// ERROR 404 ROUTE
app.get('*', (req, res) => {
    res.render('error404')
});


// SERVER LISTEN
app.listen(PORT, () => {
    console.log('Server is wide awake on port = ' + PORT) // starts server from port in the .env file.
});