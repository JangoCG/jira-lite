import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Style.css';

interface BoardProps {}

export const Board: React.FC<BoardProps> = ({}) => {
  return (
    <div className="contentContainer ml-72">
      <div className=" flexContainer flex flex-col">
        <div className="bg-red-400 w-full">Header</div>
        {/* Inner Flex Container */}
        <div className="flex  mt-24 ml-12 mr-12 gap-3">
          {/* colum */}
          <div className="bg-gray-100 flex-grow rounded flex flex-col h-full">
            {/* column title */}
            <div className="h-10 font-sans uppercase item-center text-gray-500 text-sm ml-2 mt-2 pt-0.5">
              <p>Backlog</p>
            </div>
            {/* task */}
            <div className="bg-white h-16 m-1 rounded-sm shadow">
              <p className="text-sm pb-2">Kleine küssen</p>
              <div className="flex ml-3 items-center gap-2">
                <div className="h-full">
                  <i className="text-red-400 customIcon text-icon h-7">
                    <FontAwesomeIcon icon={faArrowUp} />{' '}
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

            {/* task */}
            <div className="bg-white h-16 m-1 rounded-sm shadow">
              <p className="text-sm pb-2">Realy important Issue</p>
              <div className="flex ml-3 items-center gap-2">
                <div className="h-full">
                  <i className="text-red-400 customIcon text-icon h-7">
                    <FontAwesomeIcon icon={faArrowUp} />{' '}
                  </i>
                </div>
                <div>
                  {/* <p className="text-sm mt-1">3</p> */}
                  <div className="bg-gray-200 w-6 rounded-lg mt-1 h-5">
                    <p className="text-center text-xs text-black-700 font-bold pt-0.5">2</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="test"></div>

            {/* task */}
            <div className="bg-white h-16 m-1 rounded-sm shadow">
              <p className="text-sm pb-2">Joggen</p>
              <div className="flex ml-3 items-center gap-2">
                <div className="h-full">
                  <i className="text-red-400 customIcon text-icon h-7">
                    <FontAwesomeIcon icon={faArrowUp} />{' '}
                  </i>
                </div>
                <div>
                  {/* <p className="text-sm mt-1">3</p> */}
                  <div className="bg-gray-200 w-6 rounded-lg mt-1 h-5">
                    <p className="text-center text-xs text-black-700 font-bold pt-0.5">7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex-grow rounded ">Open</div>
          <div className="bg-gray-100 flex-grow rounded">In Progress</div>
          <div className="bg-gray-100 flex-grow rounded">Done</div>
        </div>
      </div>
    </div>
  );
};
