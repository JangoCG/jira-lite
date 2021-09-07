import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Board } from './components/Board/Board';

function App() {
  return (
    <>
      <Navigation />
      <Sidebar />
      <Board />
    </>
  );
}

export default App;
