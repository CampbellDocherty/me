import { useState } from 'react';
import { Content, Header, WipProject } from './styles';

export const Wip = ({
  wip,
}: {
  wip: { title: string; description: string; link: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WipProject key={wip.title} onClick={() => setIsOpen((prev) => !prev)}>
      <Header>
        <p>{wip.title}</p>
        <p>+</p>
      </Header>

      <Content $isOpen={isOpen}>
        <p>{wip.description}</p>
        <a href={wip.link} target="_blank" rel="noreferrer">
          {wip.link}
        </a>
      </Content>
    </WipProject>
  );
};
