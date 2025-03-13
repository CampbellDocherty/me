import { styled } from 'styled-components';

const Drawer = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 40px;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-size: 2rem;
  transform: translateX(-50%);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    transform: translateX(-20%);
  }

  &:focus {
    background-color: white;
    color: black;
    transform: translateX(-20%);
    outline: none;
  }
`;

export const Diary = () => {
  return (
    <Drawer tabIndex={0}>
      <p>+</p>
    </Drawer>
  );
};
