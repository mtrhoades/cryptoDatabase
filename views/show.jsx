// Show page for each individual coin

// Imports
const React = require('react');
const Def = require('./layouts/default');

function Show ( { coins } ) {
    console.log(coins.name)
    return (
        <Def>
            <h2>Show Page</h2>
            <br></br>
            <h3>{ coins.name }</h3>
            <p>
                Market Cap 
                {
                    coins.marketCap >= "1,000,000,000"
                    ? <span> is over </span>
                    : <span> is less than </span>
                }
                1 billion
            </p>
            <img id="coinImages" src={coins.image} alt="{coins.name}" />
            <li><a href="/coins">Go Home</a></li>
        </Def>
    )
}


// Exports
module.exports = Show;