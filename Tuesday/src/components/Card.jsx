import React from 'react';
import './Card.css';

const Card = ({ card, handleClick, flipped, disabled, audioEnabled }) => {
    const handleClickWrapper = () => {
        if (!disabled) {
            handleClick(card);
            if (audioEnabled) {
                speak(card.name);
            }
        }
    };

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="card" onClick={handleClickWrapper}>
            <div className={flipped ? 'flipped' : ''}>
                <div className={`front ${card.name}`}>{card.name}</div>
                <div className="back"></div>
            </div>
        </div>
    );
};

export default Card;
