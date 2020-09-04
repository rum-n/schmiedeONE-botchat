import React from 'react';
import './App.css';

const ContactWindow = ({name}) => {
  return (
    <div className="headerWrapper">
      <span className="contactName">{name}</span>
    </div>
  );
}

export default ContactWindow;
