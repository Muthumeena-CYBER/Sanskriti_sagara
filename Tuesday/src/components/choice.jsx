import React from 'react';

const ColorOptions = ({ onSelectOption }) => {
    return (
        <div className="color-options">
            <h2>What would you like to do?</h2>
            <button onClick={() => onSelectOption('learn')}>Learn</button>
            <button onClick={() => onSelectOption('play')}>Play</button>
        </div>
    );
};

export default ColorOptions;
