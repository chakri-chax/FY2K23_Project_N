// src/components/LyricsBox.js

import React from 'react';

const LyricsBox = ({ lyrics, onChange }) => {
  return (
    <div className="lyrics-box">
      <h2>English Song Lyrics</h2>
      <textarea
        value={lyrics}
        onChange={(e) => onChange(e.target.value)}
        rows={20}
        cols={50}
        placeholder="Paste English song lyrics here..."
      />
    </div>
  );
};

export default LyricsBox;
