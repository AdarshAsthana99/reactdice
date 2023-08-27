import React from 'react';

const Player = ({ playerName, score, currentScore, isActive }) => {
  return (
    <section className={`player ${isActive ? 'player--active' : ''}`}>
      <h2 className="name" id={`name--${playerName}`}>{`Player ${playerName + 1}`}</h2>
      <p className="score" id={`score--${playerName}`}>{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id={`current--${playerName}`}>{currentScore}</p>
      </div>
    </section>
    
  );
};

export default Player;
