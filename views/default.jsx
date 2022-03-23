// Boilerplate HTML default for views pages

// Imports/requires & selectors
const React = require('react');

// Stub function
function Def(html) {
    return (
        <html>
            <head>
                <title>Crypto Database</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
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
                {html.children} 
                {/* ^puts all other html from other pages right here. */}
            </body>
        </html>
    )
}

// Exports
module.exports = Def;