// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      
      <button onClick={()=>{setCount(count+ 1)}}>Update in parent</button>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
};

export default ParentComponent;
