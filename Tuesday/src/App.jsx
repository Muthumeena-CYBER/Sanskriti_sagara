
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Dashboard from './components/DashBoard';
import LanguageSelector from './components/LanguageSelector';
import LearnColorsTelugu from './components/LearnColorsTelugu';
import LearnColorsTamil from './components/tamilColors';
import LearnColorsHindi from './components/HindiColor';
import ColorOptions from './components/choice';
import GameBoard from './components/GameBoard';
import ActionSelector from './components/ActionSelector';
import Whiteboard from './components/Whiteboard';
import TamilAlphabet from './components/TamilAlphabet';
import StateCards from './components/states'; // Import the StateCards component
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showColors, setShowColors] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showActions, setShowActions] = useState(false);
  const [showWhiteboard, setShowWhiteboard] = useState(false);
  const [showTamilAlphabet, setShowTamilAlphabet] = useState(false);
  const [showStates, setShowStates] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleColorButtonClick = () => {
    setShowColors(true);
    setShowStates(false); // Ensure States is not shown
  };

  const handleLettersButtonClick = () => {
    setShowActions(true);
    setShowStates(false); // Ensure States is not shown
  };

  const handleStatesButtonClick = () => {
    setShowStates(true);
    setShowColors(false); // Ensure Colors is not shown
    setShowActions(false); // Ensure Actions are not shown
    setShowTamilAlphabet(false); // Ensure Tamil Alphabet is not shown
    setShowWhiteboard(false); // Ensure Whiteboard is not shown
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    if (selectedOption === 'whiteboard') {
      setShowWhiteboard(true);
    } else if (selectedOption === 'learn' && language === 'tamil') {
      setShowTamilAlphabet(true);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    if (option === 'learn' || option === 'whiteboard') {
      setShowColors(true);
      setShowStates(false); // Ensure States is not shown
    }
  };

  const handleActionSelect = (action) => {
    setSelectedOption(action);
    if (action === 'play') {
      setShowWhiteboard(false);
      setShowColors(false);
      setShowTamilAlphabet(false);
    } else {
      setShowActions(false);
      setShowColors(true);
      setShowWhiteboard(action === 'whiteboard');
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : showStates ? (
        <StateCards /> // Include StateCards in the return statement
      ) : showTamilAlphabet ? (
        <TamilAlphabet />
      ) : showWhiteboard && selectedLanguage ? (
        <Whiteboard />
      ) : showActions ? (
        <ActionSelector onActionSelect={handleActionSelect} />
      ) : showColors ? (
        selectedOption === 'learn' ? (
          selectedLanguage === 'telugu' ? (
            <LearnColorsTelugu />
          ) : selectedLanguage === 'tamil' ? (
            <LearnColorsTamil />
          ) : selectedLanguage === 'hindi' ? (
            <LearnColorsHindi />
          ) : (
            <LanguageSelector onLanguageSelect={handleLanguageSelect} />
          )
        ) : selectedOption === 'play' ? (
          <GameBoard />
        ) : (
          <ColorOptions onSelectOption={handleOptionSelect} />
        )
      ) : (
        <Dashboard
          onColorButtonClick={handleColorButtonClick}
          onLettersButtonClick={handleLettersButtonClick}
          onStatesButtonClick={handleStatesButtonClick} // Pass handleStatesButtonClick to Dashboard
        />
      )}
    </div>
  );
}

export default App;
