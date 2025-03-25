import { useEffect, useState } from 'react';
import {
  Drawer,
  Letter,
  ProjectContent,
  ProjectDescription,
  ProjectIcon,
  ProjectImage,
  ProjectLink,
  ProjectTitle,
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
  const [showContent, setShowContent] = useState(false);

  const seen = new Set();

  useEffect(() => {
    if (!openProject && isOpen) {
      setShowContent(false);
      setIsOpen(false);
    }
    if (openProject) {
      if (openProject.id !== project.id && isOpen) {
        setShowContent(false);
        setIsOpen(false);
      }
    }
  }, [openProject]);

  return (
    <Drawer
      $isOpen={isOpen}
      $bg={project.bg}
      onClick={() => {
        onOpen(isOpen ? null : project);
        const nextOpenState = !isOpen;
        if (nextOpenState) {
          setTimeout(() => {
            setShowContent(true);
          }, 300);
        } else {
          setShowContent(false);
        }

        return setIsOpen(nextOpenState);
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
      {showContent && (
        <ProjectContent $isOpen={isOpen}>
          <ProjectIcon src={project.icon} alt="icon" />

          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectImage
            $borderColor={project.bg || 'black'}
            src={project.img}
            alt="image"
          />
          <ProjectLink href={project.link} target="_blank" rel="noreferrer">
            {project.link?.split('https://')[1]}
          </ProjectLink>
        </ProjectContent>
      )}
    </Drawer>
  );
};
