import { styled } from 'styled-components';

const Drawer = styled.div<{ $isOpen: boolean }>`
  height: 100%;
  width: 20%;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  font-size: 2.5rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    background-color: white;
    color: black;
    outline: none;
  }

  & > p {
    position: absolute;
    top: ${(props) => (props.$isOpen ? '20px' : '50%')};
    right: 20px;
    margin: 0;
    transition:
      transform 0.3s ease-in-out,
      top 0.3s ease-in-out;
    transform: ${(props) => (props.$isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }
`;

export const Diary = ({
  isOpen,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
}) => {
  return (
    <Drawer $isOpen={isOpen} onClick={onOpen}>
      <p>+</p>
    </Drawer>
  );
};
