import { styled } from 'styled-components';
import { Diary } from './diary';
import { ProjectSection } from './projects';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px;
`;

const App = () => {
  return (
    <Container>
      <Diary />
      <ProjectSection />
    </Container>
  );
};

export default App;
