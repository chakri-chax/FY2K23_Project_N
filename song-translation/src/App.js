// src/App.js

import React from 'react';
import ChatGpt from './components/ChatGpt';
import TranslationApp from './components/Translation';
function App() {
  return (
    <div className="App">
      <h1>Translation App using ChatGPT API</h1>
      <TranslationApp/>
    </div>
  );
}

export default App;
