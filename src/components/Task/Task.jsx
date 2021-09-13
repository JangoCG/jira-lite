import React from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Draggable } from 'react-beautiful-dnd';

function Task(props) {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-white h-24 m-1 rounded-sm shadow"
        >
          <p className="text-sm pb-2">{props.task.title}</p>
          <div className="flex ml-3 items-center gap-2">
            <div className="h-full">
              <i className="text-red-400 customIcon text-icon h-7">
                <FontAwesomeIcon icon={faArrowUp} />
              </i>
            </div>
            <div>
              {/* <p className="text-sm mt-1">3</p> */}
              <div className="bg-gray-200 w-6 rounded-lg mt-1 h-5">
                <p className="text-center text-xs text-black-700 font-bold pt-0.5">13</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
