import { useEffect, useState } from 'react';
import { Project } from './Project';
import { projects } from './projects';
import { Container } from './styles';
import { Project as ProjectType } from './types';
import { Sections } from '../../App';

export const ProjectSection = ({
  onOpen,
  openSection,
}: {
  openSection: Sections | null;
  onOpen: (section: Sections | null) => void;
}) => {
  const [openProject, setOpenProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    if (openSection) {
      if (openSection !== Sections.PROJECTS) {
        setOpenProject(null);
      }
    }
  }, [openSection]);

  const onProjectOpen = (p: ProjectType | null) => {
    if (p && openSection !== Sections.PROJECTS) {
      onOpen(Sections.PROJECTS);
    }
    setOpenProject(p);
  };

  return (
    <Container>
      {projects.map((project, i) => (
        <Project
          key={i}
          project={project}
          openProject={openProject}
          onOpen={onProjectOpen}
        />
      ))}
    </Container>
  );
};
