import { useState } from 'react';
import { styled } from 'styled-components';
import { Diary } from './diary';
import { ProjectSection } from './projects';

const Container = styled.div<{ $diaryOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  transform: ${(props) =>
    props.$diaryOpen ? 'translateX(0%)' : 'translateX(-10%)'};
  transition: all 0.3s ease-in-out;

  &:has(> *:first-child:hover),
  &:has(> *:first-child:focus) {
    transform: ${(props) =>
      props.$diaryOpen ? 'translateX(0%)' : 'translateX(-5%)'};
  }
`;

const App = () => {
  const [diaryOpen, setDiaryOpen] = useState(false);
  return (
    <Container $diaryOpen={diaryOpen}>
      <Diary isOpen={diaryOpen} onOpen={() => setDiaryOpen(!diaryOpen)} />
      <ProjectSection />
    </Container>
  );
};

export default App;
