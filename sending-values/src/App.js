import React, { useState } from 'react';
import SourceComponent from './SourceComponent.jsx';
import DestinationComponent from './DestinationComponent.jsx';
import ParentComponent from './ParentComponent.js';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* <h1>Passing useState Values between Components</h1>
      <SourceComponent />
      <DestinationComponent count={count} />
      <button onClick={handleIncrement}>Increment Count in App</button> */}
      <ParentComponent/>
    </div>
  );
};

export default App;
