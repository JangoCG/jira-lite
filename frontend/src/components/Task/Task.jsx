import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Draggable } from 'react-beautiful-dnd';
import profileIcon from './placeholder_icon.png';

function Task(props) {
  const imageUrl =
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
  return (
    <Draggable draggableId={props.task.id.toString()} index={props.index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`bg-white h-24 m-1 rounded-sm shadow hover:bg-gray-100 transform flex flex-col ${
            snapshot.isDragging ? 'bg-white shadow-md' : ''
          }`}
        >
          <div>
            <p className="text-sm pb-2 font-sans font-medium text-gray-600">{props.task.title}</p>
          </div>
          {/* flex container for extra information */}
          <div className="flex ml-3 items-center gap-2 mt-1 ring-5 ring-yellow-500">
            <div className="h-full">
              <i className="text-red-400 text-icon">
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
            </div>
            <div>
              {/* <p className="text-sm mt-1">3</p> */}
              <div className="bg-gray-200 w-7 rounded-lg mt-1 h-5">
                <p className="text-center text-xs text-black-700 font-bold pt-0.5">13</p>
              </div>
            </div>
            {/* profile icon */}
            <div className="ml-auto mr-3">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                src={profileIcon}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
