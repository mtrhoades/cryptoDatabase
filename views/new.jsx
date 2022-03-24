
// Imports
const React = require('react')
const Default = require('./layouts/default')

// Stub Function
function New () {
    return (
      <Default>
        <h2>Add a New Coin</h2>
        <form action="/coins" method="POST">
            <label htmlFor="name">Coin Name</label>
                <input id="name" type="text" name="name" required></input>
            <label htmlFor="image">Image</label>
                <input id="image" type="text" name="image"></input>
            <label htmlFor="symbol">Ticker Symbol</label>
                <input id="symbol" type="text" name="symbol" required></input>
            <label htmlFor="price">Price</label>
                <input id="price" type="text" name="price" required></input>
            <label htmlFor="marketcap">Market Cap</label>
                <input id="marketcap" type="text" name="marketcap" required></input>
            <br></br>
            <input type="submit"></input>
        </form>
      </Default>
    )
}

module.exports = New;