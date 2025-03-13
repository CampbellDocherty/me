import { styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;

export const Drawer = styled.div<{ $backgroundColor: string }>`
  height: 100%;
  width: 10%;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProjectTitle = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  cursor: default;

  &::selection {
    background-color: transparent;
  }
`;

export const SVGOverlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
