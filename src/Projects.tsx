import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;

const Drawer = styled.div<{ $backgroundColor: string }>`
  height: 100%;
  width: 10%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const ProjectTitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  cursor: default;

  &::selection {
    background-color: transparent;
  }
`;

const SVGOverlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Project = ({
  project,
  onMeasure,
}: {
  project: Project;
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
      console.log(letterToMeasure);
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
    <Drawer $backgroundColor={project.backgroundColour}>
      <ProjectTitle ref={titleRef}>
        {project.title.split('').map((l, i) => {
          return <span key={i}>{l}</span>;
        })}
      </ProjectTitle>
    </Drawer>
  );
};

type Project = {
  id: number;
  letter: string;
  title: string;
  backgroundColour: string;
};

const projects: Project[] = [
  { id: 0, letter: 'c', title: 'FCUK', backgroundColour: '#F3D5B5' },
  { id: 1, letter: 'a', title: 'WAAW', backgroundColour: '#E7BC91' },
  { id: 2, letter: 'm', title: 'My Valentine', backgroundColour: '#E7BC91' },
  { id: 3, letter: 'p', title: '360 Portraits', backgroundColour: '#BC8A5F' },
  { id: 4, letter: 'b', title: 'based god', backgroundColour: '#A47148' },
  { id: 5, letter: 'e', title: '19 Horses', backgroundColour: '#8B5E34' },
  { id: 6, letter: 'l', title: 'Nang Land', backgroundColour: '#6F4518' },
  { id: 7, letter: 'l', title: 'Hope Tala', backgroundColour: '#603808' },
];

export const ProjectSection = () => {
  const [positions, setPositions] = useState<{
    [key: number]: { x: number; y: number };
  }>({});

  const handleMeasure = (id: number, coords: { x: number; y: number }) => {
    setPositions((prev) => ({ ...prev, [id]: coords }));
  };
  return (
    <Container>
      {projects.map((project, i) => (
        <Project key={i} project={project} onMeasure={handleMeasure} />
      ))}
      <SVGOverlay>
        {Object.entries(positions).map(([id, { x, y }], index, arr) =>
          index < arr.length - 1 ? (
            <g key={id}>
              <circle cx={x} cy={y} r="5" fill="black" />
              <line
                x1={x}
                y1={y}
                x2={arr[index + 1][1].x}
                y2={arr[index + 1][1].y}
                stroke="black"
                strokeWidth="2"
              />
            </g>
          ) : (
            <circle key={id} cx={x} cy={y} r="5" fill="black" />
          ),
        )}
      </SVGOverlay>
    </Container>
  );
};
