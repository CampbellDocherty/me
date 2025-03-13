import { styled } from 'styled-components';
import then from '../../assets/then.png';
import now from '../../assets/now.png';
import { useState } from 'react';
import { wips } from './wips';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  text-align: right;
  border: 1px solid white;
  align-items: flex-end;
  width: 80%;

  & > p {
    width: 80%;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

const ImageButton = styled.button<{ $expanded: boolean }>`
  width: ${(props) => (props.$expanded ? '30%' : '20%')};
  transition: width 0.3s ease-in-out;
  background-color: black;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;

  &::selection {
    background-color: transparent;
  }

  & > img {
    width: 100%;
    transition: width 0.3s ease-in-out;
  }
`;

const WorkInProgress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: scroll;
  gap: 18px;
  font-size: 0.9rem;
  margin-top: 16px;
`;

const WipProject = styled.div`
  align-self: flex-end;
  width: 95%;
  flex: 1;
  max-height: 30px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > p {
    margin: 0;
  }
`;

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
          return (
            <WipProject key={wip.title}>
              <p>{wip.title}</p>
              <p>+</p>
            </WipProject>
          );
        })}
      </WorkInProgress>
    </Section>
  );
};
