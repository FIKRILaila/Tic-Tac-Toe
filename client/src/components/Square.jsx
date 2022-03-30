import React from 'react';

const Square = ({ value, onClick, canPlay, enabled, isWinnerSquare }) => {
  const canSelect = !value && enabled && canPlay;
  const btnClassName = canSelect ? '' : 'disabled';
  const winningClass = isWinnerSquare ? 'border border-info' : '';
  return (
    <div className={`square bg-light rounded shadow mb-2 ${winningClass}`}>
      <button
        onClick={onClick}
        className={`square-item btn ${btnClassName}`}
        disabled={!canSelect}
      >
        {value}
      </button>
    </div>
  );
};

export default Square;
