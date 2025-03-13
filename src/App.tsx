import { styled } from 'styled-components';
import { About } from './about';
import { Diary } from './diary';
import { ProjectSection } from './projects';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const App = () => {
  return (
    <Container>
      <Diary />
      <ProjectSection />
      <About />
    </Container>
  );
};

export default App;
