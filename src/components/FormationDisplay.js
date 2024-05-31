import React from 'react';
import './FormationDisplay.css';
import soccer_field from "../assets/soccer-field.jpg"
import jersey from "../assets/jersey.png"

function FormationDisplay({ team }) {
  if (!team) {
    return (
      <div className="FormationDisplay">
        <img className="field" src={soccer_field} alt="" />
      </div>
    );
  }

  const { name, formation, players } = team;

  return (
    <div className="FormationDisplay">
      <div className='team-info'>
        <h2>{name} {formation}</h2>
      </div>
      <div className="field-container">
        <img className="field" src={soccer_field} alt="" />
        <div className={`formation-${formation} rotate`}>
          {Object.values(players).map((player, index) => (
            <div key={index} className={`position-${index + 1}`}>
              <div className="jersey-container">
                <img className="jersey" src={jersey} alt="" />
                <span className="number">{player.number}</span>
                <span className="player-name">{player.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormationDisplay;
