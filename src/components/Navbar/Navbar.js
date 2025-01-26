import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ThemeContext } from '../../context/ThemeContext';
import { colors, glassMorphism } from '../../styles/CommonStyles';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';
import LogoIcon from "../../images/tab-icon-01.png";


const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 999;
  padding: ${props => props.scrolled ? '15px 0' : '20px 0'};
  transition: all 0.3s ease;
  background: ${props => props.scrolled 
    ? props.darkMode 
      ? glassMorphism.dark.background
      : glassMorphism.light.background
    : 'transparent'
  };
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};

  @media (max-width: 1300px) {
    padding: ${props => props.scrolled ? '15px 50px' : '20px 50px'};
  }

  @media (max-width: 768px) {
    padding: ${props => props.scrolled ? '15px 20px' : '20px 20px'};
  }
`;

const MaxWidth = styled.div`
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  height: 2rem;
  width: auto;
`;

const LogoText = styled.span`
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  font-weight: 500;
  font-size: 1.1rem;
`;

const MenuBtn = styled.div`
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  font-size: 25px;
  cursor: pointer;
  display: none;
  z-index: 1001;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: block;
    position: ${props => props.isOpen ? 'fixed' : 'relative'};
    right: ${props => props.isOpen ? '20px' : '0'};
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    height: 100vh;
    width: 100%;
    left: ${props => props.isOpen ? '0' : '-100%'};
    top: 0;
    background: ${props => props.darkMode 
      ? 'rgba(31, 31, 31, 0.98)' 
      : 'rgba(248, 249, 250, 0.98)'
    };
    padding-top: 80px;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    z-index: 1000;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MenuLink = styled(Link)`
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px 15px;
  border-radius: 5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${colors.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    font-weight: bold;
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    display: inline-block;
    font-size: 20px;
    padding: 15px 30px;
    
    &::after {
      bottom: 10px;
    }
  }
`;

const ThemeToggle = styled.button`
  background: ${props => props.darkMode 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'
  };
  border: none;
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  font-size: 24px;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.1);
    background: ${colors.primary};
    color: white;
  }

  @media (max-width: 768px) {
    left: 15px;
    bottom: 15px;
    padding: 10px;
    font-size: 20px;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <NavbarContainer scrolled={scrolled} darkMode={darkMode}>
        <MaxWidth>
          <NavContent>
            <LogoContainer>
              <LogoImage src={LogoIcon} alt="Portfolio Logo" />
              <LogoText darkMode={darkMode}>BS</LogoText>
            </LogoContainer>
            <MenuBtn
              darkMode={darkMode}
              onClick={toggleMenu}
              isOpen={isMenuOpen}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </MenuBtn>
            <Menu isOpen={isMenuOpen} darkMode={darkMode}>
              <MenuItem>
                <MenuLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  darkMode={darkMode}
                  onClick={closeMenu}
                >
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  darkMode={darkMode}
                  onClick={closeMenu}
                >
                  About
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  darkMode={darkMode}
                  onClick={closeMenu}
                >
                  Projects
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  darkMode={darkMode}
                  onClick={closeMenu}
                >
                  Skills
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  darkMode={darkMode}
                  onClick={closeMenu}
                >
                  Education
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink
                  to="connect"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  darkMode={darkMode}
                  onClick={closeMenu}
                  activeClass="active"
                >
                  Contact
                </MenuLink>
              </MenuItem>
            </Menu>
          </NavContent>
        </MaxWidth>
      </NavbarContainer>
      <ThemeToggle
        onClick={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        aria-label="Toggle theme"
      >
        {darkMode ? "🌞" : "🌙"}
      </ThemeToggle>
    </>
  );
};

export default Navbar; 