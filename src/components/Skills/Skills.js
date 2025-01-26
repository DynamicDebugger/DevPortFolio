import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../styles/CommonStyles';

// Import all images
import javaIcon from '../../images/java.png';
import jsIcon from '../../images/js.png';
import typescriptIcon from '../../images/typescript.png';
import psqlIcon from '../../images/psql.png';
import mysqlIcon from '../../images/mysql.png';
import mongoDBIcon from '../../images/mongo-db.png';
import bootstrapIcon from '../../images/Bootstrap_logo.svg.png';
import tailwindIcon from '../../images/tailwind.svg';
import jqueryIcon from '../../images/jQuery.png';
import reactIcon from '../../images/react.png';
import springIcon from '../../images/spring.png';
import gitIcon from '../../images/git.png';
import postmanIcon from '../../images/postman-icon.svg';
import githubIcon from '../../images/github-logo.png';
import vscodeIcon from '../../images/vscode.webp';
import eclipseIcon from '../../images/eclipse-logo.png';

const SkillsSection = styled.section`
  padding: 100px 0;
  background: ${props => props.darkMode ? colors.darkBg : colors.lightBg};
  transition: all 0.3s ease;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  margin-bottom: 1rem;
`;

const CategoryTitle = styled.h3`
  text-align: center;
  font-size: 1.875rem;
  margin: 2rem 0;
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
`;

const SkillName = styled.p`
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  font-weight: 600;
  text-align: center;
`;

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  const skillCategories = {
    languages: [
      { name: "Java", icon: javaIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: typescriptIcon },
      { name: "PSQL", icon: psqlIcon },
      { name: "MySQL", icon: mysqlIcon },
      { name: "MongoDB", icon: mongoDBIcon }
    ],
    frameworks: [
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Tailwind", icon: tailwindIcon },
      { name: "jQuery", icon: jqueryIcon },
      { name: "React", icon: reactIcon },
      { name: "Spring", icon: springIcon }
    ],
    tools: [
      { name: "Git", icon: gitIcon },
      { name: "Postman", icon: postmanIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "VS Code", icon: vscodeIcon },
      { name: "Eclipse", icon: eclipseIcon }
    ]
  };

  return (
    <SkillsSection id="skills" darkMode={darkMode}>
      <Title darkMode={darkMode}>Skills</Title>
      <Subtitle darkMode={darkMode}>
        I love to learn new things and experiment with new technologies.
      </Subtitle>
      <Subtitle darkMode={darkMode}>
        These are some of the major languages, technologies, tools and platforms I have worked with:
      </Subtitle>

      {/* Languages & Databases */}
      <CategoryTitle darkMode={darkMode}>Languages & Databases</CategoryTitle>
      <SkillsGrid>
        {skillCategories.languages.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon src={skill.icon} alt={skill.name} />
            <SkillName darkMode={darkMode}>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>

      {/* Frameworks & Technologies */}
      <CategoryTitle darkMode={darkMode}>Frameworks & Technologies</CategoryTitle>
      <SkillsGrid>
        {skillCategories.frameworks.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon src={skill.icon} alt={skill.name} />
            <SkillName darkMode={darkMode}>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>

      {/* Tools & Platforms */}
      <CategoryTitle darkMode={darkMode}>Tools & Platforms</CategoryTitle>
      <SkillsGrid>
        {skillCategories.tools.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon src={skill.icon} alt={skill.name} />
            <SkillName darkMode={darkMode}>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills; 
