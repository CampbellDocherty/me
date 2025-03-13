import { styled } from 'styled-components';

export const Section = styled.div`
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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

export const ImageButton = styled.button<{ $expanded: boolean }>`
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

export const WorkInProgress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: scroll;
  gap: 18px;
  font-size: 0.9rem;
  margin-top: 16px;
`;

export const WipProject = styled.div`
  align-self: flex-end;
  width: 95%;

  border-bottom: 1px solid white;
  padding-bottom: 8px;

  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    margin: 0;
  }
`;

export const Content = styled.div<{ $isOpen: boolean }>`
  box-sizing: border-box;
  transition: max-height 1s ease;
  max-height: ${(props) => (props.$isOpen ? '100px' : '0px')};
  justify-self: center;
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
`;
