// src/components/FormationDisplay.js
import React from 'react';
import './FormationDisplay.css';
import soccer_field from "../assets/soccer-field.jpg"


function FormationDisplay({ team }) {
  if (!team) {
    return <div className="FormationDisplay">No team selected</div>;
  }

  const { name, formation, players } = team;

  return (
    <div className="FormationDisplay">
      <h2>{name} {formation}</h2>
      <div className="field-container">
        <img className="field" src={soccer_field} alt="" />
        {/* Render players dynamically based on their position */}
        <div className={`formation-${formation}`}>
          {Object.values(players).map((player, index) => (
            <p key={index} className={`position-${index + 1} name-box`}>
              <span>{player.number}</span> {player.name}
            </p>
          ))}
        </div>
      </div>
    </div >
  );
}

export default FormationDisplay;
