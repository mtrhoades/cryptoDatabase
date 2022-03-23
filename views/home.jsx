// This is the home page for the app.

// Imports/require & selectors
const React = require('react');
const Def = require('./default');

function home() {
    return (
        <Def>
            <main>
                <h1>Cryptocurrency Database</h1>
                <div>
                    <img id="homeImage" src="/images/cryptobullsvsbears.png" alt="sillouhette of bulls vs. bears"></img>
                </div>
                <div>
                    <a href="/coins">
                        <button className="btn-primary">Coins Page</button>
                    </a>
                </div>
            </main>
        </Def>
    )
}


// Exports
module.exports = home;