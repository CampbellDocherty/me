import { Drawer, Letter, ProjectTitle } from './styles';
import { Project as ProjectType } from './types';

export const Project = ({ project }: { project: ProjectType }) => {
  const seen = new Set();
  return (
    <Drawer>
      <ProjectTitle>
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
    </Drawer>
  );
};
