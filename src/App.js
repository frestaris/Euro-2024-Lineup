import React, { useState } from 'react';
import TeamSelection from './components/TeamSelection';
import FormationDisplay from './components/FormationDisplay';
import PlayerList from './components/PlayerList';
import Header from './components/Header'
import Footer from './components/Footer';
import teamsData from './data';
import './App.css';

function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="Sidebar">
          <TeamSelection teams={teamsData} onSelect={handleSelectTeam} />
        </div>
        <div className="Content">
          <FormationDisplay team={selectedTeam} />
        </div>
        <div className="RightSidebar">
          <PlayerList players={selectedTeam ? selectedTeam.players : null} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
