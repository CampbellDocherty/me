import { useState } from 'react';
import {
  Drawer,
  Letter,
  ProjectContent,
  ProjectTitle,
  SketchPlaceholder,
} from './styles';
import { Project as ProjectType } from './types';

export const Project = ({ project }: { project: ProjectType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const seen = new Set();

  return (
    <Drawer $isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
      <ProjectTitle $isOpen={isOpen}>
        {project.title.split('').map((l, i) => {
          if (l === ' ') {
            return <br key={i} />;
          }

          const letterInName =
            l.toLowerCase() === project.letter && !seen.has(l);

          if (letterInName) {
            seen.add(l);
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
