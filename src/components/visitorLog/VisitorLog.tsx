import { useEffect, useMemo, useState } from 'react';
import { keyframes, styled } from 'styled-components';
import { Sections } from '../../App';
import { LogVisitWebcam } from './Webcam';
import { useGetImages } from './useGetImages';

const Drawer = styled.div<{ $isOpen: boolean; $isEmpty: boolean }>`
  height: 100%;
  width: ${(props) => (props.$isOpen ? '70%' : '10%')};
  border: 1px solid white;
  font-size: 2.5rem;
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => (props.$isOpen ? 'auto' : 'pointer')};
  position: relative;
  border-left: ${(props) => (props.$isOpen ? '1px solid white' : 'none')};
  box-sizing: border-box;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$isEmpty ? 'flex-end' : 'space-between'};
  padding-left: 20px;
  padding-top: 75px;

  &:hover,
  &:focus {
    outline: none;
    width: ${(props) => (props.$isOpen ? '70%' : '11%')};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 80%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const VisitorImage = styled.img<{ $delay: number; $pulseUserImage: boolean }>`
  width: ${(props) => (props.$pulseUserImage ? '40%' : '30%')};
  height: auto;
  object-fit: contain;
  animation: ${fadeIn} 1s ease-in-out;
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: ${(props) => props.$delay}ms;
  transition: all 0.3s ease-in-out;

  &::selection {
    background-color: transparent;
  }

  &:hover {
    width: 31%;
  }
`;

const Title = styled.p`
  font-size: 1.5rem;
  animation: ${fadeIn} 1s ease-in-out;
  margin: 0;
  writing-mode: vertical-lr;
`;

const Link = styled.p`
  font-size: 1rem;
  animation: ${fadeIn} 1s ease-in-out;
  margin: 0;
  position: absolute;
  transition: opacity 0.3s ease-in-out;
  top: 26px;
  left: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

const Loading = styled.p`
  font-size: 16px;
`;

const Icon = styled.p<{ $isOpen: boolean }>`
  position: absolute;
  top: ${(props) => (props.$isOpen ? '10px' : '50%')};
  right: 20px;
  margin: 0;
  cursor: pointer;
  transition:
    transform 0.3s ease-in-out,
    top 0.3s ease-in-out;
  transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : 'rotate(0)')};
`;

export const VisitorLog = ({
  onOpen,
  openSection,
}: {
  openSection: Sections | null;
  onOpen: (section: Sections | null) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingVisit, setIsLoggingVisit] = useState(false);
  const [pulseUserImage, setPulseUserImage] = useState(false);

  const { images, isLoading } = useGetImages();
  const visitors = images && images.length > 0;
  const previousVisitId = localStorage.getItem('id');

  const previousImage = useMemo(() => {
    if (!previousVisitId) {
      return null;
    }
    return images?.find((img) => img.src.includes(previousVisitId));
  }, [images, previousVisitId]);

  useEffect(() => {
    if (openSection) {
      if (openSection !== Sections.VISITORS_LOG) {
        setIsOpen(false);
        setIsLoggingVisit(false);
      }
    }
  }, [openSection]);

  const handleOpen = () => {
    const newState = !isOpen;
    if (newState && openSection !== Sections.VISITORS_LOG) {
      onOpen(Sections.VISITORS_LOG);
    }

    if (!newState) {
      setIsLoggingVisit(false);
    }

    setIsOpen(newState);
  };

  return (
    <Drawer
      $isEmpty={!visitors}
      $isOpen={isOpen}
      onClick={isOpen ? undefined : handleOpen}
    >
      <Wrapper>
        {isOpen && isLoggingVisit && (
          <LogVisitWebcam onCapture={() => setIsLoggingVisit(false)} />
        )}
        <ImageContainer>
          {isOpen && isLoading ? (
            <Loading>Loading...</Loading>
          ) : (
            visitors &&
            isOpen &&
            images.map((img, i) => {
              const delay = 50 * i;
              return (
                <VisitorImage
                  key={`${img.alt} + ${i}`}
                  src={img.src}
                  alt={img.alt}
                  title={img.alt}
                  $delay={delay}
                  $pulseUserImage={pulseUserImage}
                />
              );
            })
          )}
        </ImageContainer>
      </Wrapper>
      {isOpen && !previousImage && (
        <Link onClick={() => setIsLoggingVisit(true)}>Log your visit</Link>
      )}
      {isOpen && previousImage && (
        <Link
          onClick={() => {
            setPulseUserImage(true);
            setTimeout(() => {
              setPulseUserImage(false);
            }, 2000);
          }}
        >
          Visit logged: {previousImage?.name}
        </Link>
      )}
      {isOpen && <Title>Visitor Log</Title>}
      <Icon $isOpen={isOpen} onClick={handleOpen}>
        +
      </Icon>
    </Drawer>
  );
};
