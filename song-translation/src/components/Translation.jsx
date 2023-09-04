// import React, { useState } from 'react';
// import axios from 'axios';

// const TranslationApp = () => {
//   const [englishLyrics, setEnglishLyrics] = useState('');
//   const [teluguLyrics, setTeluguLyrics] = useState('');

//   const handleTranslate = async () => {
//     try {
//       const apiKey = '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'; // Replace with your actual API key
//       const response = await axios.post(
//         'https://api.openai.com/v1/engines/davinci/completions',
//         {
//           prompt: `Translate the following English song lyrics to Telugu:\n\n${englishLyrics}`,
//           max_tokens: 1000,
//           temperature: 0.7,
//           n: 1,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${apiKey}`,
//           },
//         }
//       );

//       // Extract the translated text from the API response
//       const translatedText = response.data.choices[0].text;

//       // Update the state with the translated lyrics
//       setTeluguLyrics(translatedText);
//     } catch (error) {
//       console.error('Error translating lyrics:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>English to Telugu Song Lyrics Translator</h1>
//       <textarea
//         rows="10"
//         cols="80"
//         value={englishLyrics}
//         onChange={(e) => setEnglishLyrics(e.target.value)}
//         placeholder="Enter English song lyrics here..."
//       />

//       <button onClick={handleTranslate}>Translate to Telugu</button>

//       <h2>Telugu Lyrics:</h2>
//       <div>
//         <pre>{teluguLyrics}</pre>
//       </div>
//     </div>
//   );
// };

// export default TranslationApp;


import React, { useState } from 'react';
import axios from 'axios';

const TranslationComponent = () => {
  const [translatedText, setTranslatedText] = useState('');

  const translateToTelugu = () => {
    const apiKey = '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';
    const englishText = "Sammohanuda Pedavistha Neeke\nKonchem Korukkova Ishtasakhuda\nNadumistha Neeke Nalugey Pettukova\nPachchi Praayaaley Vechchanaina\nChilipi Oosulaada Vachche\nChematallo Thadisina Dheham\nSugandhaala Gaali Panche";

    axios
      .post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: englishText,
        max_tokens: 150,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      })
      .then(response => {
        setTranslatedText(response.data.choices[0].text);
      })
      .catch(error => {
        console.error('Error translating:', error);
      });
  };

  return (
    <div>
      <button onClick={translateToTelugu}>Translate</button>
      <div>
        <h2>Translated Text (Telugu):</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TranslationComponent;
