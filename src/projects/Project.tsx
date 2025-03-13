import { useRef, useEffect } from 'react';
import { Drawer, Letter, ProjectTitle } from './styles';
import { Project as ProjectType } from './types';
import { useWindowSize } from './useWindowSize';

export const Project = ({
  project,
  onMeasure,
}: {
  project: ProjectType;
  onMeasure: (id: number, coords: { x: number; y: number }) => void;
}) => {
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (titleRef.current) {
      const letters = Array.from(
        titleRef.current.children,
      ) as HTMLSpanElement[];

      const letterToMeasure = letters.find((span) => {
        return span.innerText.toLowerCase() === project.letter;
      });
      if (letterToMeasure) {
        const rect = letterToMeasure.getBoundingClientRect();
        onMeasure(project.id, {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    }
  }, [titleRef, project.id, width, height]);

  return (
    <Drawer>
      <ProjectTitle ref={titleRef}>
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
