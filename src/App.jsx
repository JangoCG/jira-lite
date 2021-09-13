import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Sidebar } from './components/Sidebar/Sidebar';
import Board from './components/Board/Board';
import { useState } from 'react';

function App() {
  const mockData = [
    { id: 'task1', title: 'Joggen' },
    { id: 'task2', title: 'küss kleine' },
    { id: 'task3', title: 'küss kleine nochmal' },
  ];

  const [backlog, setBacklog] = useState(mockData);
  const [open, setOpen] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  return (
    <>
      <Navigation />
      <Sidebar />
      <Board
        backlog={backlog}
        setBacklog={setBacklog}
        open={open}
        setOpen={setOpen}
        inProgress={inProgress}
        setInProgress={setInProgress}
        done={done}
        setDone={setDone}

      />
    </>
  );
}

export default App;
