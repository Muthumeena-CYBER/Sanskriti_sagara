import React from 'react';
import './TamilAlphabet.css'; // Import the CSS file

const TamilAlphabet = () => {
  const playSound = (letter) => {
    const audio = new Audio(`/sounds/${letter}.mp3`); // Directly reference the public folder
    audio.play();
  };
  

  return (
    <div>
      <h1>Tamil Alphabet Pronunciation</h1>
      <div className="container">
        <button className="letter-btn" onClick={() => playSound('a')}>அ</button>
        <button className="letter-btn" onClick={() => playSound('aa')}>ஆ</button>
        <button className="letter-btn" onClick={() => playSound('i')}>இ</button>
        <button className="letter-btn" onClick={() => playSound('ii')}>ஈ</button>
        <button className="letter-btn" onClick={() => playSound('u')}>உ</button>
      </div>
    </div>
  );
};

export default TamilAlphabet;
