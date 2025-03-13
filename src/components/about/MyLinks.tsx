import React from 'react';
import { styled } from 'styled-components';

const List = styled.ul`
  align-self: flex-end;
  justify-self: flex-end;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  list-style: none;
  gap: 16px;
  font-size: 0.8rem;
  padding: 0;
  margin-top: 24px;

  & > a {
    transition: all 0.3s ease-in;
    cursor: pointer;
    text-decoration: none;
    color: white;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const MyLinks = () => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    return e.stopPropagation();
  };

  return (
    <List>
      <a
        onClick={onClick}
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
      <a
        onClick={onClick}
        href="https://www.instagram.com/nowicanpostmyownpics/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
      <a
        onClick={onClick}
        href="mailto:dochertycampbell@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Email
      </a>
    </List>
  );
};
