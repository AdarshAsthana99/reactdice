import React from 'react';
import Player from './Player';
// import './rolldice.css'; // Import your CSS file here?
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DiceGame = () => {
  return (
    <main>
      <Player playerName={0} score={0} currentScore={0} isActive={true} />
      <Player playerName={1} score={0} currentScore={0} isActive={false} />

      <img src="dice-1.png" alt="Playing dice" className="dice hidden" />
      <button className="btn btn--new">
        <i className="fa-solid fa-arrows-rotate"></i> NEW GAME
      </button>
      <button className="btn btn--roll">
        <i className="fa-solid fa-dice"></i> ROLL DICE
      </button>
      <button className="btn btn--hold">
        <i className="fa-sharp fa-solid fa-hand"></i>HOLD
      </button>
    </main>

   
   
  );
};

export default DiceGame;
