import { faAdjust, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Item, ItemText, NavLeft } from './Styles';
import './Style.css';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    //Navbar
    <div
      className={
        'z-50 fixed top-0 left-0 overflow-x-hidden h-screen w-16 bg-blue-800 transition-all hover:w-48 group test'
      }
      id={'navbar'}
    >
      {/*logo */}
      <div className={'block relative mt-4 mb-2'}>
        <div className={'relative w-full h-11 pl-16 mt-8 leading-10'}>
          <i className={'absolute left-5 text-2xl'}>
            <FontAwesomeIcon icon={faAdjust} color={'white'} />
          </i>
        </div>
      </div>

      {/*Navbar Item*/}
      <div className="navbarItem">
        <i className="navbarItemIcon">
          <FontAwesomeIcon icon={faSearch} />
        </i>
        <aside className="navbarText">Search Issue</aside>
      </div>

      <div className="navbarItem">
        <i className="navbarItemIcon">
          <FontAwesomeIcon icon={faPlus} />
        </i>
        <aside className="navbarText">Create Issue</aside>
      </div>
    </div>
  );
};
