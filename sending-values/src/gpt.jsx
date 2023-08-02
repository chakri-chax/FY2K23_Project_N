// SourceComponent.js
import React, { useState } from 'react';

const SourceComponent = () => {
  const [count, setCount] = useState(0);

  // Function to export the count value
  const exportCountValue = () => {
    return count;
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Source Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
};

export default SourceComponent;
export { exportCountValue }; // Export the function to be used in other components
