import React from 'react';

// TODO: Create a `name` variable
const name = 'chrissie';

// const numLetters = array.from(name).length;
// const numLetters1 = {name.split(' ').length}

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughts ="just do it"

function JSXVariables() {
 
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {name} But you can call me ...</h1>
          <h1>Your Momma</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {name.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
      
          <h2>I think React {thoughts}</h2>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
