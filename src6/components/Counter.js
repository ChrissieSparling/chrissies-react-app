import React, { useState } from 'react';
import CardBody from './CardBody';

// done: Add a comment explaining what export default does
 // Here we set the state for count and also create a function to update it.
export default function Counter() {
  // done: Add a comment that explains how the useState hook works
  // Set set the initial value to -
  let [count, setCount] = useState(0);

  // done: Explain what is happening with this click handler
   // Helper function to handle when the user clicks increment
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // done: Explain what is happening with this click handler
  // Helper function to handle when the user clicks decrement
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* done: Add a comment that explains what props are getting passed to CardBody */}
      {/* Here we pass two props to CardBody which happen to be the event handlers we created above */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
