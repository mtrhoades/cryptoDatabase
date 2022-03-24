// ERROR 404 PAGE FOR ANYTHING ELSE TYPED IN URL OTHER THAN PAGES WE HAVE TO VIEW.

// IMPORTS
const React = require("react");
const Default = require("./layouts/default");

// STUB FUNCTION
function error404({ breads }) {
    return (
      <Default title={'title'}>
        <h2>404 Error</h2>
        <a href={`/coins`}>Return to Coins Page</a>
        <img id ="error404Cat" src="/images/404_not_found.png" alt="sleeping cat"></img>
      </Default>
    );
  }
  
  // EXPORTS
  module.exports = error404;