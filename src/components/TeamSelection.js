// src/components/TeamSelection.js
import React from 'react';
import './TeamSelection.css';

function TeamSelection({ teams, onSelect }) {
  return (
    <div className="TeamSelection">
      <h2>Select a Team</h2>
      <ul>
        {teams.map((team, index) => (
          <li key={index} onClick={() => onSelect(team)}>
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamSelection;
