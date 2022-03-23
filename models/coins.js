// IMPORTING MONGOOSE FOR DATABASE
// const mongoose = require('mongoose');
require('dotenv').config();

// // CONNECTION
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });




module.exports = [
    {
        name: "Bitcoin",
        symbol: "BTC",
        price: "$42,000",
        marketCap: "3,000,000,000"
    },
    {
        name: "Ethereum",
        symbol: "ETH",
        price: "$4,000",
        marketCap: "2,070,000,000"
    },
    {
        name: "Cardano",
        symbol: "ADA",
        price: "$.90",
        marketCap: "1,500,000,000"
    },
    {
        name: "Solana",
        symbol: "SOL",
        price: "$93",
        marketCap: "1,700,000,000"
    }
]