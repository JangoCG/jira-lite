import React from 'react';
import './Style.css';
interface NavigationProps {}
export const Sidebar: React.FC<NavigationProps> = ({}) => {
  return (
    <div className="sidebar">
      <div className="projectInfo">
        <div className="projectText">
          <div className="projectName">Jango V1.0</div>
          <div className="category"></div>
        </div>
      </div>
      <div className="divider" />
    </div>
  );
};
