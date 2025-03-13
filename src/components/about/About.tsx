import { useEffect, useState } from 'react';
import {
  Section,
  ImageContainer,
  ImageButton,
  WorkInProgress,
  AboutContent,
  Icon,
} from './styles';
import { Wip } from './Wip';
import { wips } from './wips';
import now from '../../assets/now.png';
import then from '../../assets/then.png';
import { MyLinks } from './MyLinks';
import { Sections } from '../../App';

export const About = ({
  onOpen,
  openSection,
}: {
  openSection: Sections | null;
  onOpen: (section: Sections | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (openSection) {
      if (openSection !== Sections.ABOUT) {
        setIsOpen(false);
      }
    }
  }, [openSection]);

  const handleOpen = () => {
    const newState = !isOpen;
    if (newState && openSection !== Sections.ABOUT) {
      onOpen(Sections.ABOUT);
    }
    setIsOpen(newState);
  };

  return (
    <Section $isOpen={isOpen} onClick={handleOpen}>
      <Icon $isOpen={isOpen}>+</Icon>
      <AboutContent $isOpen={isOpen}>
        <p>Campbell Docherty</p>
        <ImageContainer>
          <ImageButton
            $expanded={expanded === then}
            onClick={(e) => {
              e.stopPropagation();
              return setExpanded((prev) => (prev === then ? null : then));
            }}
          >
            <img src={then} title="Then" alt="Cammy as a baby hehe" />
          </ImageButton>
          <ImageButton
            $expanded={expanded === now}
            onClick={(e) => {
              e.stopPropagation();
              return setExpanded((prev) => (prev === now ? null : now));
            }}
          >
            <img src={now} title="Now" alt="Cammy now!" />
          </ImageButton>
        </ImageContainer>
        <p>Software engineer, technologist + (sometime) photographer!</p>
        <WorkInProgress>
          {wips.map((wip) => {
            return <Wip key={wip.id} wip={wip} />;
          })}
        </WorkInProgress>
        <MyLinks />
      </AboutContent>
    </Section>
  );
};
