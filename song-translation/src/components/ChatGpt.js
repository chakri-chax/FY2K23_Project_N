// src/components/ChatGpt.js

import React, { useState } from 'react';
import axios from 'axios';

const ChatGpt = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTranslate = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `Translate the following English text to Telugu: "${inputText}"`,
        max_tokens: 100,
        temperature: 0.7,
        n: 1,
      }, {
        headers: {
          'Authorization': 'Bearer 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',
        },
      });

      setOutputText(response.data.choices[0].text.trim());
    } catch (error) {
      console.error('Translation Error:', error);
      setOutputText('Error occurred while translating. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Enter English Text</h2>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        rows={10}
        cols={50}
        placeholder="Enter English text here..."
      />
      <button onClick={handleTranslate}>Translate to Telugu</button>

      <h2>Telugu Translation</h2>
      <textarea
        value={outputText}
        readOnly
        rows={10}
        cols={50}
        placeholder="Telugu translation will appear here..."
      />
    </div>
  );
};

export default ChatGpt;
