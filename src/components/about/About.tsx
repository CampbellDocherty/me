import { styled } from 'styled-components';
import then from '../../assets/then.png';
import now from '../../assets/now.png';
import { useState } from 'react';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  text-align: right;
  border: 1px solid white;
  align-items: flex-end;
  width: 60%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

const ImageButton = styled.button<{ $expanded: boolean }>`
  width: ${(props) => (props.$expanded ? '20%' : '10%')};
  transition: width 0.3s ease-in-out;
  background-color: black;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;

  & > img {
    width: 100%;
    transition: width 0.3s ease-in-out;
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
      <p>↓ More work in progess projects ↓</p>
    </Section>
  );
};
