import React, { useState, useEffect } from 'react';
import Card from './Card';
import './GameBoard.css';
import '@fortawesome/fontawesome-free/css/all.css';

const cardsArray = [
    { name: 'red', id: 1 },
    { name: 'red', id: 2 },
    { name: 'blue', id: 3 },
    { name: 'blue', id: 4 },
    { name: 'green', id: 5 },
    { name: 'green', id: 6 },
    { name: 'yellow', id: 7 },
    { name: 'yellow', id: 8 },
    { name: 'orange', id: 9 },
    { name: 'orange', id: 10 },
    { name: 'purple', id: 11 },
    { name: 'purple', id: 12 },
];

const GameBoard = () => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [matchedCards, setMatchedCards] = useState([]);
    const [tries, setTries] = useState(0);
    const [audioEnabled, setAudioEnabled] = useState(true); // Add state for audio

    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        const shuffledCards = [...cardsArray].sort(() => 0.5 - Math.random());
        setCards(shuffledCards);
    };

    const handleCardClick = (card) => {
        if (flippedCards.length < 2) {
            setFlippedCards([...flippedCards, card]);
            if (flippedCards.length === 1) {
                setDisabled(true);
                setTimeout(() => {
                    checkForMatch(card);
                }, 1000);
            }
        }
    };

    const checkForMatch = (newCard) => {
        const [firstCard] = flippedCards;
        setTries((prevTries) => prevTries + 1);
        if (firstCard.name === newCard.name && firstCard.id !== newCard.id) {
            setMatchedCards([...matchedCards, firstCard, newCard]);
        }
        setFlippedCards([]);
        setDisabled(false);
    };

    const toggleAudio = () => {
        setAudioEnabled(!audioEnabled);
    };

    return (
        <div className="game-container">
            <h1>Memory Game</h1>
            <button className="audio-toggle" onClick={toggleAudio}>
                <i className={`fas ${audioEnabled ? 'fa-volume-up' : 'fa-volume-mute'}`}></i>
            </button>
            <div className="game-board">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        handleClick={handleCardClick}
                        flipped={flippedCards.includes(card) || matchedCards.includes(card)}
                        disabled={disabled}
                        audioEnabled={audioEnabled} // Pass audioEnabled prop
                    />
                ))}
                {matchedCards.length === cardsArray.length && (
                    <div className="congratulations">
                        Congratulations! You found all matches in {tries} tries!
                    </div>
                )}
            </div>
        </div>
    );
};

export default GameBoard;
