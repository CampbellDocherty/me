import { useState } from 'react';
import { Section, ImageContainer, ImageButton, WorkInProgress } from './styles';
import { Wip } from './Wip';
import { wips } from './wips';
import now from '../../assets/now.png';
import then from '../../assets/then.png';

export const About = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Section>
      <p>Campbell Docherty</p>
      <ImageContainer>
        <ImageButton
          $expanded={expanded === then}
          onClick={() => setExpanded((prev) => (prev === then ? null : then))}
        >
          <img src={then} title="Then" alt="Cammy as a baby hehe" />
        </ImageButton>
        <ImageButton
          $expanded={expanded === now}
          onClick={() => setExpanded((prev) => (prev === now ? null : now))}
        >
          <img src={now} title="Now" alt="Cammy now!" />
        </ImageButton>
      </ImageContainer>
      <p>Software engineer, technologist + (sometime) photographer!</p>
      <WorkInProgress>
        {wips.map((wip) => {
          return <Wip key={wip.title} wip={wip} />;
        })}
      </WorkInProgress>
    </Section>
  );
};
