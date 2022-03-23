// Boilerplate HTML default for views pages

// Imports/requires & selectors
const React = require('react');

// Stub function
function Def() {
    return (
        <html>
            <head>
                <title>Crypto Database</title>
                <link rel="stylesheet" href="/css/styles.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/coins">Coins</a></li>
                        <li><a href="/coins/new">Add a Coin</a></li>
                    </ul>
                </nav>
                {/* {html.children} */}
            </body>
        </html>
    )
}

// Exports
module.exports = Def;