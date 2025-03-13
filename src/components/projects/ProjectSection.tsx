import { useState } from 'react';
import { Project } from './Project';
import { projects } from './projects';
import { Container } from './styles';
import { Project as ProjectType } from './types';

export const ProjectSection = () => {
  const [openProject, setOpenProject] = useState<ProjectType | null>(null);
  return (
    <Container>
      {projects.map((project, i) => (
        <Project
          key={i}
          project={project}
          openProject={openProject}
          onOpen={(p: ProjectType | null) => setOpenProject(p)}
        />
      ))}
    </Container>
  );
};
