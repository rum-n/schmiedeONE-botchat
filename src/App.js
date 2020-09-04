import React from 'react';
import './App.css';
import CommunicationZone from './CommunicationZone';
import SideChats from './SideChats';

function App() {
  return (
    <div className="App">
      <div className='historyContainer'>
        <SideChats />
      </div>
      <div className="mainContainer">
        <CommunicationZone />
      </div>
    </div>
  );
}

export default App;
