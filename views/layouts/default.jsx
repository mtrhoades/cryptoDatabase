// Boilerplate HTML default for views pages

// Imports
const React = require('react');

// Stub function
function Def(html) { // must put html in as the parameter to use {html.children}
    return (
        <html>
            <head>
                <title>Crypto Database</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Calligraffitti&family=Concert+One&family=Josefin+Sans:wght@600&family=Luckiest+Guy&family=Righteous&family=Rubik+Bubbles&family=Sniglet:wght@800&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="/css/styles.css"></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/coins">Portfolio</a></li>
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