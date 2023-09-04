import React, { useState, useEffect, useRef } from 'react';
import './SpeechToText.css';

const SpeechToText = () => {
  const [realTimeTranscript, setRealTimeTranscript] = useState([]);
  const [fullScript, setFullScript] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true; // Enable continuous listening
    recognitionRef.current.interimResults = true; // Get interim results as the user speaks

    recognitionRef.current.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(' ');
      setRealTimeTranscript((prevTranscript) => [...prevTranscript, transcript]);
    };
  }, []);

  const startListening = () => {
    setIsListening(true);
    setRealTimeTranscript([]);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    setIsListening(false);
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setFullScript((prevScript) => [...prevScript, ...realTimeTranscript]);
  };

  return (
    <div className="speech-to-text">
      <h1>Speech to Text</h1>
      <div className={`text-box ${isListening ? 'listening' : ''}`}>
        {realTimeTranscript.map((word, index) => (
          <span key={index}>{word} </span>
        ))}
      </div>
      <div className="button-container">
        <button className="button" onClick={isListening ? stopListening : startListening}>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
      </div>
      <div className="full-script">
        <h2>Full Script</h2>
        <div>{fullScript.join(' ')}<br/></div>
      </div>
    </div>
  );
};

export default SpeechToText;
