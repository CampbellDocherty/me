import { useState } from 'react';
import { styled } from 'styled-components';

const Drawer = styled.div<{ $isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.$isOpen ? '25%' : '10%')};
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  font-size: 2.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  border-left: ${(props) => (props.$isOpen ? '1px solid white' : 'none')};

  &:hover,
  &:focus {
    background-color: white;
    color: black;
    outline: none;
    width: ${(props) => (props.$isOpen ? '25%' : '15%')};
  }

  & > p {
    position: absolute;
    top: ${(props) => (props.$isOpen ? '10px' : '50%')};
    right: 20px;
    margin: 0;
    transition:
      transform 0.3s ease-in-out,
      top 0.3s ease-in-out;
    transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }
`;

export const Diary = () => {
  const [diaryOpen, setDiaryOpen] = useState(false);
  return (
    <Drawer $isOpen={diaryOpen} onClick={() => setDiaryOpen(!diaryOpen)}>
      <p>+</p>
    </Drawer>
  );
};
