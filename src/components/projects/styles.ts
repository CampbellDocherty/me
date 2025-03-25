import { css, styled } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
`;

export const Drawer = styled.div<{ $isOpen: boolean; $bg: string | undefined }>`
  height: 100%;
  flex: ${(props) => (props.$isOpen ? 10 : 1)};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${(props) => (props.$bg ? props.$bg : 'white')};
    color: black;
    outline: none;
  }

  ${(props) =>
    props.$isOpen &&
    css`
      &:hover,
      &:focus {
        background-color: black;
        color: white;
        outline: none;
      }
    `}
`;

export const ProjectTitle = styled.p<{
  $isOpen: boolean;
  $oneLetter: boolean | null;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: default;
  z-index: 1;
  position: absolute;
  transition: all 0.3s ease;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(props) =>
    props.$isOpen &&
    css`
      top: 50%;
      left: 5%;
      transform: translate(0%, -50%);
    `}

  ${(props) =>
    props.$oneLetter &&
    css`
      text-align: start;
      top: 10px;
      left: 50%;
      transform: translate(-50%, -5px);
    `}

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
      font-weight: 800;
    `};
`;

export const ProjectContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  justify-content: center;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition:
    opacity 0.1s ease,
    transform 0.3s ease;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  height: 100%;
  max-width: ${({ $isOpen }) => ($isOpen ? '80%' : '0%')};
`;

export const ProjectDescription = styled.div`
  text-align: left;
  margin-bottom: 12px;
  width: 100%;
`;

export const ProjectIcon = styled.img`
  width: 50px;
`;

export const ProjectImage = styled.img<{ $borderColor: string }>`
  width: 100%;
  object-fit: cover;
  border: 2px solid ${(props) => props.$borderColor};
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  display: flex;
  color: white;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
