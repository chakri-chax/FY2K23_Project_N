import React, { useState } from 'react';

const SourceComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Source Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
};

export default SourceComponent;
