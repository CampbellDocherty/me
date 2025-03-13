import { useEffect, useMemo, useState } from 'react';
import {
  Drawer,
  Letter,
  ProjectContent,
  ProjectTitle,
  SketchPlaceholder,
} from './styles';
import { Project as ProjectType } from './types';

export const Project = ({
  project,
  onOpen,
  openProject,
}: {
  project: ProjectType;
  onOpen: (p: ProjectType | null) => void;
  openProject: ProjectType | null;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const seen = new Set();

  useEffect(() => {
    if (openProject) {
      if (openProject.id !== project.id && isOpen) {
        setIsOpen(false);
      }
    }
  }, [openProject]);

  return (
    <Drawer
      $isOpen={isOpen}
      onClick={() => {
        onOpen(isOpen ? null : project);

        return setIsOpen((prev) => !prev);
      }}
    >
      <ProjectTitle
        $isOpen={isOpen}
        $oneLetter={openProject && openProject.id !== project.id}
      >
        {project.title.split('').map((l, i) => {
          const letterInName =
            l.toLowerCase() === project.letter && !seen.has(l);

          if (letterInName) {
            seen.add(l);
          }

          if (openProject && openProject.id !== project.id && !letterInName) {
            return null;
          }

          if (l === ' ') {
            return <br key={i} />;
          }
          return (
            <Letter key={i} $letterInName={letterInName}>
              {l}
            </Letter>
          );
        })}
      </ProjectTitle>
      <ProjectContent $isOpen={isOpen}>
        <p>{project.description}</p>
        <SketchPlaceholder />
      </ProjectContent>
    </Drawer>
  );
};
