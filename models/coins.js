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
        marketCap: "3,000,000,000",
        image: "/images/bitcoin.png"
    },
    {
        name: "Ethereum",
        symbol: "ETH",
        price: "$4,000",
        marketCap: "70,000",
        image: "/images/ethereum.png"
    },
    {
        name: "Cardano",
        symbol: "ADA",
        price: "$.90",
        marketCap: "1,500,000,000",
        image: "/images/cardano.png"
    },
    {
        name: "Solana",
        symbol: "SOL",
        price: "$93",
        marketCap: "1,700,000,000",
        image: "/images/solana.png"
    }
]