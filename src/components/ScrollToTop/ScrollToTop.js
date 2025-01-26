import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 1600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollButton 
      className={isVisible ? 'show' : ''} 
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </ScrollButton>
  );
};

const ScrollButton = styled.div`
  position: fixed;
  height: 45px;
  width: 42px;
  background: crimson;
  right: 30px;
  bottom: 10px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  z-index: 9999;
  font-size: 30px;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;

  &.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

export default ScrollToTop; 