import { Project } from './Project';
import { projects } from './projects';
import { Container } from './styles';

export const ProjectSection = () => {
  return (
    <Container>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </Container>
  );
};
