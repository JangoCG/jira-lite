import React from 'react';
import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { Sidebar } from './components/Sidebar/Sidebar';
import Board from './components/Board/Board';
import { useState, useEffect } from 'react';
import httpClient from './shared/utils/httpClient';
import { HttpMethods } from './shared/utils/constants/HttpMethods';
import Modal from './components/Modal/Modal';

function App() {

  const [backlog, setBacklog] = useState([]);
  const [open, setOpen] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await httpClient(HttpMethods.GET, '/v1/task');
      setBacklog(res);
    }
    fetchData();
  }, [showModal]);

  return (
    <>
      <Navigation showModal={showModal} setShowModal={setShowModal} />
      <Sidebar/>
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
      {showModal && <Modal setShowModal={setShowModal}/>}

    </>
  );
}

export default App;
