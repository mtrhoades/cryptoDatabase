// Renders index page for listing coins and their data:

// Imports
const React = require('react');
const Def = require('./layouts/default');
const CoinGecko = require('coingecko-api');


// Stub function
function index( { coins, index } ) {
    return (
        <Def>
            <h2>Portfolio Page</h2>
            <ul>
                {
                    coins.map((coins, index) => {
                        return (
                        <li key={index}>
                            <a href={`/coins/${index}`}>
                                {coins.name}
                            </a>
                        </li>
                        )
                    })
                }
            </ul>
        </Def>
    )
}


// Exports
module.exports = index;