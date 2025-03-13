import { Drawer, Letter, ProjectTitle } from './styles';
import { Project as ProjectType } from './types';

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <Drawer>
      <ProjectTitle>
        {project.title.split('').map((l, i) => {
          if (l === ' ') {
            return <br key={i} />;
          }

          const letterInName = l.toLowerCase() === project.letter;
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
