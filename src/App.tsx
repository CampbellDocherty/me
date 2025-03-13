import { styled } from 'styled-components';
import { About } from './components/about';
import { Diary } from './components/diary';
import { ProjectSection } from './components/projects';

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
