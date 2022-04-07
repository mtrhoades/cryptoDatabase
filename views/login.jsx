// This is the home page for the app.

// Imports/require & selectors
const React = require('react');
const Def = require('./layouts/default');

function home() {
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
        <main>
            <div id="homeBanner">
                <h1>Fool's Gold
                    
                </h1>
            </div>
            <div id="loginWrapper">
                <div id="bannerImg">
                        <img id="homeImage" src="/images/uphillBattle.png" alt="pushing coin uphill"></img>
                </div>
                <div id="loginForm">
                    <div id="userName">
                        <label for="userName">Username:</label>
                        <input type="text" id="userName" name="userName" required ></input>
                    </div>
                    <br></br>
                    <div id="password">
                        <label for="password" >Password:</label>
                        <input type="password" id="password" name="password" minlength="8" required ></input>
                    </div>
                    <br></br>
                    <div id="Buttons">
                        <div id="loginButton">
                            <button id="loginB" type="submit">Login</button>
                        </div>
                        <div id="signupButton">
                            <button id="signUpButton" type="submit">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </body>
    </html>
    )
}


// Exports
module.exports = home;