import { faAdjust, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CompanyLogo, Item, ItemText, NavLeft } from './Styles';

interface NavigationProps {
}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <NavLeft id='navigation'>
      {/*logo */}
      <div className={"block relative mt-4 mb-2"}>
        <CompanyLogo className={'mb-2'}>
          <i style={{ fontSize: '26px' }}> <FontAwesomeIcon icon={faAdjust} color={'white'} /></i>
        </CompanyLogo>
      </div>

      <div className={'mt-8'}>
        <Item >
          <i style={{ fontSize: '22px' }}> <FontAwesomeIcon icon={faSearch} /></i>
          <ItemText className={'font-sans font-medium'}>Search Issue</ItemText>
        </Item>
      </div>

      <Item>
        <i style={{ fontSize: '24px' }}> <FontAwesomeIcon icon={faPlus} /></i>
        <ItemText className={'font-sans font-medium'}>Create Issue</ItemText>
      </Item>

    </NavLeft>
  );
};
