import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Typed from 'typed.js';
import backGroundImage from "../../images/hometab/09.jpg";
import styled from 'styled-components';
import { colors } from '../../styles/CommonStyles';

const HomeSection = styled.section`
  display: flex;
  background: url(${backGroundImage}) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  color: #fff;
  min-height: 500px;
  font-family: "Ubuntu", sans-serif;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    z-index: 1;
  }
`;

const MaxWidth = styled.div`
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;

const HomeContent = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Text1 = styled.div`
  font-size: 2rem;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Text2 = styled.div`
  font-size: 4rem;
  font-weight: 600;
  margin-left: -3px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Text3 = styled.div`
  font-size: 2.5rem;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }

  span {
    color: #ff004f;
    font-weight: 500;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${colors.darkSecondary};
  margin-right: 16px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    width: 64px;
    height: 64px;
    padding: 12px;
    border-radius: 50%;
    background: white;
  }
`;

const LinkedInIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const GitHubIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const EmailIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: [
        "SDE Intern @ Amazon",
        "Final-Year CSE Student",
        "Web Developer",
        "Hackathon Enthusiast",
        "Full-Stack Developer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <HomeSection id="home" darkMode={darkMode}>
      <MaxWidth>
        <HomeContent>
          <Text1>Hello, my name is</Text1>
          <Text2>Balasubramani Elamurugan</Text2>
          <Text3>
            And I'm a <span className="typing"></span>
          </Text3>
          <SocialLinks>
            <SocialLink 
              href="https://www.linkedin.com/in/balasubramani-e/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 64 64">
                <path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" />
              </svg>
            </SocialLink>
            
            <SocialLink 
              href="https://github.com/DynamicDebugger" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 64 64">
                <path d="M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z" />
              </svg>
            </SocialLink>
            
            <SocialLink 
              href="mailto:balasubramani285@gmail.com"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 64 64">
                <path d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" />
              </svg>
            </SocialLink>
          </SocialLinks>
        </HomeContent>
      </MaxWidth>
    </HomeSection>
  );
};

export default Home; 
