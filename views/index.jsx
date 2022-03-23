// Renders index page for listing coins and their data:

// Imports
const React = require('react');
const Def = require('./layouts/default');

// Stub function
function index({ coins }) {
    return (
        <Def>
            <h2>Coin Index Page</h2>
            {/* <p>I have {coins[2].name}!</p> (checking for adding data)*/ } 
            <ul>
                {
                    coins.map((coins, index) => {
                        return (<li key={index.name}>
                            <a href="{`/coins/${index}`}">
                                {coins.name}
                            </a>
                        </li>)
                    })
                }
            </ul>
        </Def>
    )
}


// Exports
module.exports = index;