import { styled } from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 20px;
  padding-right: 20px;
  text-align: right;
  border: 1px solid white;
`;

export const About = () => {
  return (
    <Section>
      <p>Campbell Docherty</p>
      <p>Software engineer, technologist + (sometime) photographer!</p>
      <p>↓ More work in progess projects ↓</p>
    </Section>
  );
};
