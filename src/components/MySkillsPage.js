import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme } from './Themes';
import { Develope } from './AllSvgs';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
  background-color: ${props => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  @media (max-width: 1024px) {
    width: 30vw;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 50vw;
    height: auto;
   
  }

  @media (max-width: 480px) {
    
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  text-align: center;

  ${Main}:hover & {
    & > * {
      fill: ${props => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    flex-direction: column;
  }
`;

const Description = styled.div`
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${props => props.theme.body};
  }

  strong {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  p {
    margin-left: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    p {
      margin-left: 0.5rem;
    }
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 5rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Section>
          <Main>
            <Title>
              <Develope width={40} height={40} /> Frontend Developer
            </Title>
            <Description>
              I create responsive, user-friendly web interfaces with attention to performance and design.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>HTML, CSS, JavaScript, React.js, Redux, Tailwind, Bootstrap, Sass</p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>VS Code, GitHub, Vercel, Figma</p>
            </Description>
          </Main>

          <Main>
            <Title>
              <Develope width={40} height={40} /> Backend Developer
            </Title>
            <Description>
              I handle server-side logic, APIs, and database operations to power full-stack applications.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>Node.js, Express.js, MongoDB, Firebase, REST APIs</p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>VS Code, GitHub, Vercel, Postman</p>
            </Description>
          </Main>
        </Section>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
