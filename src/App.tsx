import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <Navigation />
      <Sidebar />
    </>
  );
}

export default App;
