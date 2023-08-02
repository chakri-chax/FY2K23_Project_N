// src/components/TranslationBox.js

import React from 'react';

const TranslationBox = ({ translation }) => {
  return (
    <div className="translation-box">
      <h2>Telugu Translation</h2>
      <textarea value={translation} readOnly rows={20} cols={50} placeholder="Telugu translation will appear here..." />
    </div>
  );
};

export default TranslationBox;
