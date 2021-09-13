import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import React from 'react';
import './Style.css';
import Task from '../Task/Task';
import Column from '../Column/Column';

function Board(props) {
  const BACKLOG = 'backlog';
  const OPEN = 'open';
  const IN_PROGRESS = 'inProgress';
  const DONE = 'done';

  console.log("board props", props);

  const onDragEnd = (result) => {
    console.log('result', result);
    const { source, destination } = result;
    console.log('source', source);
    console.log('destination', destination);

    // task moved to invalid location
    if (!result.destination) {
      return;
    }

    // task moved to same  location
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    // setup

    let backlog = props.backlog;
    let open = props.open;
    let inProgress = props.inProgress;
    let done = props.done;
    // let itemToAdd = backlog[source.index];
    let itemToAdd;

    // Source Logic
    // if (source.droppableId === 'backlog') {
    //   taskToAdd = active[source.index];
    //   // removes task at index from array
    //   active.splice(source.index, 1);
    // } else {
    //   taskToAdd = complete[source.index];
    //   complete.splice(source.index, 1);
    // }

    //  source logic
    switch (source.droppableId) {
      case BACKLOG:
        itemToAdd = backlog[source.index];
        backlog.splice(source.index, 1);
        break;
      case OPEN:
        itemToAdd = open[source.index];
        open.splice(source.index, 1);
        break;
      case IN_PROGRESS:
        itemToAdd = inProgress[source.index];
        inProgress.splice(source.index, 1);
        break;
      case DONE:
        itemToAdd = done[source.index];
        done.splice(source.index, 1);
        break;
    }

    // Destination Logic
    if (destination.droppableId === 'backlog') {
      // adds task at index to array
      backlog.splice(destination.index, 0, itemToAdd);
    } else {
      open.splice(destination.index, 0, itemToAdd);
    }

    console.log('active', backlog);
    console.log('complete', open);
    props.setBacklog(backlog);
    props.setOpen(open);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="contentContainer ml-72">
        <div className=" flexContainer flex flex-col">
          <div className="bg-red-400 w-full">Header</div>
          {/* Inner Flex Container */}
          <div className="flex  mt-24 ml-12 mr-12 gap-3">
            {/* colum */}
            <Column title="Backlog" list={props.backlog} id={BACKLOG} />
            <Column title="Open" list={props.open} id={OPEN} />
            <Column title="In Progress" list={props.done} id={IN_PROGRESS} />
            <Column title="Done" list={props.done} id={DONE} />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}

export default Board;
