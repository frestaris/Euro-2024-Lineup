// src/components/PlayerList.js
import React from 'react';
import './PlayerList.css';

function PlayerList({ players }) {
  if (!players) {
    return <div className="PlayerList">No team selected</div>;
  }

  return (
    <div className="PlayerList">
      <h2>Players</h2>
      <ul>
        {Object.values(players).map((player, index) => (
          <li key={index}>
            {player.number} - {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
