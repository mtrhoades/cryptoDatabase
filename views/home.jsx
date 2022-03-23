// This is the home page for the app.

// Imports/require & selectors
const React = require('react');
const Def = require('./layouts/default');

function home() {
    return (
        <Def>
            <main>
                <div id="homeBanner">
                    <h1>Cryptocurrency Database</h1>
                </div>
                <div id="bannerImg">
                        <img id="homeImage" src="/images/bullvsbear.png" alt="sillouhette of bulls vs. bears"></img>
                </div>
            </main>
        </Def>
    )
}


// Exports
module.exports = home;