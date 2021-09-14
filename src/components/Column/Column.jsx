import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task';

function Column(props) {
  return (
    <Droppable droppableId={props.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={`bg-gray-100 rounded flex flex-col h-auto flex-1 ${snapshot.isDraggingOver ? "" : ""}`}
        >
          <div className="h-10 font-sans uppercase item-center text-gray-500 text-sm ml-2 mt-2 pt-0.5">
            <p>{props.title}</p>
          </div>
          {props.list?.map((task, index) => (
            <Task task={task} index={index} key={task.id} />
          ))}
           {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
