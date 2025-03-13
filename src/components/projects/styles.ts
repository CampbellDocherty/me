import { css, styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;

export const Drawer = styled.div`
  height: 100%;
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }

  &:focus {
    background-color: white;
    color: black;
    outline: none;
  }
`;

export const ProjectTitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: default;
  z-index: 1;

  &::selection {
    background-color: transparent;
  }
`;

export const Letter = styled.span<{ $letterInName: boolean }>`
  opacity: 0.7;

  ${(props) =>
    props.$letterInName &&
    css`
      opacity: 1;
      color:;
    `};
`;

export const SVGOverlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
