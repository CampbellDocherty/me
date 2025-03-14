import { styled } from 'styled-components';
import { About } from './components/about';
import { VisitorLog } from './components/visitorLog';
import { ProjectSection } from './components/projects';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export enum Sections {
  VISITORS_LOG = 'VISITORS_LOG',
  PROJECTS = 'PROJECTS',
  ABOUT = 'ABOUT',
}

const App = () => {
  const [openSection, setOpenSection] = useState<Sections | null>(null);

  const onProjectOpen = (section: Sections | null) => {
    setOpenSection(section);
  };

  console.log(openSection);

  return (
    <Container>
      <VisitorLog openSection={openSection} onOpen={onProjectOpen} />
      <ProjectSection openSection={openSection} onOpen={onProjectOpen} />
      <About openSection={openSection} onOpen={onProjectOpen} />
    </Container>
  );
};

export default App;
