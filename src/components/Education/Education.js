import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../styles/CommonStyles';

const EducationSection = styled.section`
  padding: 100px 0;
  background: ${props => props.darkMode ? colors.darkBg : colors.lightBg};
  transition: all 0.3s ease;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
`;

const Timeline = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: ${props => props.darkMode ? colors.primary : colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;

    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'right' ? '50%' : '0'};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: ${props => props.position === 'right' ? 'auto' : '-17px'};
    left: ${props => props.position === 'right' ? '-17px' : 'auto'};
    top: 15px;
    border-radius: 50%;
    background: ${colors.primary};
    
    @media (max-width: 768px) {
      left: 15px;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: ${props => props.darkMode ? colors.darkSecondary : colors.lightSecondary};
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
`;

const TimelineSubtitle = styled.h4`
  font-size: 1.1rem;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
`;

const TimelineText = styled.p`
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  margin-bottom: 0.5rem;
`;

const TimelineDate = styled.span`
  display: inline-block;
  padding: 5px 10px;
  background: ${colors.primary};
  color: ${colors.textLight};
  border-radius: 4px;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const Education = () => {
  const { darkMode } = useContext(ThemeContext);

  const educationData = [
    {
      degree: "BE Computer Science",
      institution: "Sathyabama University, Chennai",
      grade: "CGPA - 8.78",
      date: "PRESENT",
      position: "left",
    },
    {
      degree: "XII Grade",
      institution: "Mamallan School, Kanchipuram",
      grade: "Percentage - 94.25%",
      date: "MAY 2021",
      position: "right",
    },
    // {
    //   degree: "X Grade",
    //   institution: "Mamallan School, Kanchipuram",
    //   grade: "Percentage - 91.8%",
    //   date: "MAY 2019",
    //   position: "left",
    // },
  ];

  return (
    <EducationSection id="education" darkMode={darkMode}>
      <Title darkMode={darkMode}>Education</Title>
      <Timeline darkMode={darkMode}>
        {educationData.map((edu, index) => (
          <TimelineItem key={index} position={edu.position}>
            <TimelineContent darkMode={darkMode}>
              <TimelineTitle darkMode={darkMode}>{edu.degree}</TimelineTitle>
              <TimelineSubtitle>{edu.institution}</TimelineSubtitle>
              <TimelineText darkMode={darkMode}>{edu.grade}</TimelineText>
              <TimelineDate>{edu.date}</TimelineDate>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationSection>
  );
};

export default Education; 