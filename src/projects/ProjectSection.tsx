import { useState } from 'react';
import { Coords } from './types';
import { Container, Drawer, SVGOverlay } from './styles';
import { Project } from './Project';
import { projects } from './projects';

export const ProjectSection = () => {
  const [positions, setPositions] = useState<Coords>({});

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
              <circle cx={x} cy={y} r="5" fill="red" />
              <line
                x1={x}
                y1={y}
                x2={arr[index + 1][1].x}
                y2={arr[index + 1][1].y}
                stroke="red"
                strokeWidth="2"
              />
            </g>
          ) : (
            <circle key={id} cx={x} cy={y} r="5" fill="red" />
          ),
        )}
      </SVGOverlay>
    </Container>
  );
};
