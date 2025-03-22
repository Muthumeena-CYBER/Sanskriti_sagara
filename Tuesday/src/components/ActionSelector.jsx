import React from 'react';

const ActionSelector = ({ onActionSelect }) => {
  return (
    <div className="action-selector">
      <h2>Select an Action</h2>
      <button className="btn" onClick={() => onActionSelect('learn')}>Learn</button>
      <button className="btn" onClick={() => onActionSelect('whiteboard')}>Whiteboard</button>
      <button className="btn" onClick={() => onActionSelect('play')}>Play</button>
    </div>
  );
};

export default ActionSelector;
