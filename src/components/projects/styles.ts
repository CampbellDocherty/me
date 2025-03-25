import { css, keyframes, styled } from 'styled-components';

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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const ProjectContent = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-in-out;
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  height: 100%;
  padding-right: 32px;
`;

export const ProjectDescription = styled.div`
  text-align: right;
  margin-bottom: 12px;
  max-width: 80%;
`;

export const ProjectIcon = styled.img`
  width: 50px;
`;

export const ProjectImage = styled.img<{ $borderColor: string }>`
  width: 80%;
  object-fit: cover;
  border: 2px solid ${(props) => props.$borderColor};
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  display: flex;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
