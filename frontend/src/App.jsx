import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Sidebar } from './components/Sidebar/Sidebar';
import Board from './components/Board/Board';
import { useState, useEffect } from 'react';
import httpClient from './shared/utils/httpClient';
import { HttpMethods } from './shared/utils/constants/HttpMethods';

function App() {
  const mockData = [
    { id: 'task1', title: 'Feature-1337: Implement Amazing Front End Story Abcdefg' },
    { id: 'task2', title: 'küss kleine' },
    { id: 'task3', title: 'küss kleine nochmal' },
  ];

  const [backlog, setBacklog] = useState(mockData);
  const [open, setOpen] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await httpClient(HttpMethods.GET, '/v1/task');
      setBacklog(res);
    }
    fetchData();
  }, []);

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
