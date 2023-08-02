import React from 'react';

const DestinationComponent = ({ count }) => {
  return (
    <div>
      <h2>Destination Component</h2>
      <p>Count Received from Source: {count}</p>
    </div>
  );
};

export default DestinationComponent;
