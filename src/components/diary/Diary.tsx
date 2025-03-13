import { useState } from 'react';
import { keyframes, styled } from 'styled-components';

const Drawer = styled.div<{ $isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.$isOpen ? '70%' : '10%')};
  border: 1px solid white;
  font-size: 2.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  border-left: ${(props) => (props.$isOpen ? '1px solid white' : 'none')};
  box-sizing: border-box;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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

const Title = styled.p`
  font-size: 1.5rem;
  animation: ${fadeIn} 1s ease-in-out;
  margin: 0;
  writing-mode: vertical-lr;
`;

const Icon = styled.p<{ $isOpen: boolean }>`
  position: absolute;
  top: ${(props) => (props.$isOpen ? '10px' : '50%')};
  right: 20px;
  margin: 0;
  transition:
    transform 0.3s ease-in-out,
    top 0.3s ease-in-out;
  transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : 'rotate(0)')};
`;

export const Diary = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      {isOpen && <Title>Diary</Title>}
      <Icon $isOpen={isOpen}>+</Icon>
    </Drawer>
  );
};
