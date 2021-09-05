import React from 'react';
import {
  Divider,
  LinkItem,
  LinkText,
  NotImplemented,
  ProjectInfo,
  ProjectName,
  ProjectTexts,
  Container,
} from './Styles';

interface indexProps {}

export const Sidebar: React.FC<indexProps> = ({}) => {
  return (
    <Container>
      <ProjectInfo>
        <ProjectTexts>
          <ProjectName>tesadasdasdt</ProjectName>
        </ProjectTexts>
      </ProjectInfo>
      <Divider />

      <p>asdad</p>
      <h3>adasd</h3>
    </Container>
  );
};
