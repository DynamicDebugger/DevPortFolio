import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../styles/CommonStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterSection = styled.footer`
  background: ${props => props.darkMode ? 'rgba(31, 31, 31, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  padding: 30px 0;
  position: relative;
  border-top: 1px solid ${props => props.darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
`;

const FooterContent = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

const SocialLink = styled.a`
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  font-size: 24px;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 50%;
  
  &:hover {
    color: ${colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${props => props.darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};
  font-size: 16px;
  margin-top: 15px;
  
  span {
    color: ${colors.primary};
    font-weight: 500;
  }
`;

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <FooterSection darkMode={darkMode}>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://github.com/DynamicDebugger"
            target="_blank"
            rel="noopener noreferrer"
            darkMode={darkMode}
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/balasubramani-e/"
            target="_blank"
            rel="noopener noreferrer"
            darkMode={darkMode}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink
            href="https://x.com/ishhookayy"
            target="_blank"
            rel="noopener noreferrer"
            darkMode={darkMode}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </SocialLink>
        </SocialLinks>
        <Copyright darkMode={darkMode}>
          © {new Date().getFullYear()} Created by BS
        </Copyright>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer; 