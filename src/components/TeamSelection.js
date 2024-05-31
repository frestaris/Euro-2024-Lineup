import React, { useState } from 'react';
import './TeamSelection.css';

function TeamSelection({ teams, onSelect }) {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (team) => {
    setSelectedTeam(team);
    onSelect(team);
    setMenuOpen(false); // Close the menu after selecting a team
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`TeamSelection ${menuOpen ? 'open' : ''}`}>
        <ul>
          {teams.map((team, index) => (
            <li
              key={index}
              className={selectedTeam === team ? 'selected' : ''}
              onClick={() => handleSelect(team)}
            >
              {team.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TeamSelection;
