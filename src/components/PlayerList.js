import React, { useState } from 'react';
import './PlayerList.css';

function PlayerList({ players }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`ham-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`PlayerList ${menuOpen ? 'open' : ''}`}>
        <h2>Players</h2>
        <ul>
          {players && Object.values(players).map((player, index) => (
            <li key={index}>
              {player.number}. {player.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PlayerList;
