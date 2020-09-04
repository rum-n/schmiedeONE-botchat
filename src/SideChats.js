import React from 'react';
import './App.css';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';
import InputBase from '@material-ui/core/InputBase';

function SideChats() {
  return (
    <div className="sideChatWrapper">
        <ContactWindow name='Chat history'/>
        <InputBase className="input" placeholder='Search'/>

    </div>
  );
}

export default SideChats;
