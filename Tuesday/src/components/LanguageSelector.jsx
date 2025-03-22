import React from 'react';
import './language-selector.css';

const LanguageSelector = ({ onLanguageSelect }) => {
  return (
    <div className="language-selector">
      <h2>Select a Language</h2>
      <button className="btn" onClick={() => onLanguageSelect('tamil')}>Tamil</button>
      <button className="btn" onClick={() => onLanguageSelect('telugu')}>Telugu</button>
      <button className="btn" onClick={() => onLanguageSelect('hindi')}>Hindi</button>
    </div>
  );
};

export default LanguageSelector;
