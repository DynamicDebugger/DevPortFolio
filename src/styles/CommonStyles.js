import styled from 'styled-components';

export const colors = {
  primary: '#ff004f',
  darkBg: '#1f1f1f',
  darkSecondary: '#2d2d2d',
  lightBg: '#f8f9fa',
  lightSecondary: '#ffffff',
  textDark: '#2d2d2d',
  textLight: 'white',
  lightText: '#333333',
  
  // Light mode specific colors
  lightBorder: '#ccc',
  lightSurface: '#ffffff',
  lightHover: '#f1f1f1',
  
  // Dark mode specific colors
  darkBorder: 'rgba(255, 255, 255, 0.1)',
  darkSurface: '#2d2d2d',
  darkHover: '#333333',
};

export const glassMorphism = {
  light: {
    background: 'rgba(255, 255, 255, 0.95)',
    blur: '10px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  dark: {
    background: 'rgba(31, 31, 31, 0.95)',
    blur: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
};

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Two columns for larger screens
  gap: 20px; // Space between grid items
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Stack items in a single column on smaller screens
  }
`; 