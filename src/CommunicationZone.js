import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import ChatZone from './ChatZone';
import ContactWindow from './ContactWindow';
import InputZone from './InputZone';

const CommunicationZone = () => {
  const [state, setState] = useState({
    value: '',
    disposable: '',
    history: ['How can I help?'],
    answersBasic: [],
    answersAdjust: [],
    answersAdvanced: []
  });
  const stateRef = useRef(state);

  function handleChange(event) {
    setState({
      ...state,
      value: event.target.value,
    });
  }

  function handleSubmit(event) {
    if (event.key === 'Enter') {
      const newState = {
        ...state,
        value: '',
        disposable: event.target.value,
        history: [...state.history, event.target.value],
      };
      setState(newState);
      stateRef.current = newState;

      setTimeout(dialogueEngine, 3000);
    }
    cleanHistory();
  }

  function dialogueEngine() {
    const fetchAnswers = async () => {
      const answers = await fetch('http://localhost:8000/',{
          mode: 'no-cors',
          credentials: 'include',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        }
      );
      // const reply = await answers.json();
      console.log(answers);
      setState(answers);
    };

    fetchAnswers();

    if (stateRef.current.disposable.length <= 7) {
      let response =
        state.answersAdjust[Math.floor(Math.random() * state.answersAdjust.length)];
      setState({
        ...stateRef.current,
        history: [...stateRef.current.history, response],
      });
    } else if (
      stateRef.current.history.length <= 3 &&
      stateRef.current.disposable.length > 6
    ) {
      let response =
        state.answersBasic[Math.floor(Math.random() * state.answersBasic.length)];
      setState({
        ...stateRef.current,
        history: [...stateRef.current.history, response],
      });
    } else if (stateRef.current.history.length >= 4) {
      let response =
        state.answersAdvanced[Math.floor(Math.random() * state.answersAdvanced.length)];
      setState({
        ...stateRef.current,
        history: [...stateRef.current.history, response],
      });
    }
  }

  useEffect(() => {
    dialogueEngine();
  }, []);

  function cleanHistory() {
    const tempHistory = state.history;
    let newHistory = [];
    if (state.history.length > 12) {
      tempHistory.shift();
      tempHistory.shift();
      newHistory = tempHistory;
      setState({
        ...state,
        history: newHistory,
      });
    }
  }

  return (
    <div className="chatHost innerShadow">
      <ContactWindow name='Dr. Rubberduck'/>
      <ChatZone chatItem={state.history} />
      <InputZone
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={state.value}
      />
    </div>
  );
};

export default CommunicationZone;
