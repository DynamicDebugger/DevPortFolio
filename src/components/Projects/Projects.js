import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../context/ThemeContext';
import { colors } from '../../styles/CommonStyles';

// Import all images
import codingPlatform from '../../images/project/coding-platform.png';
import fullstackBanking from "../../images/project/fullstack-banking.png";
import odAutomation from "../../images/project/OD-automation.png";
import portfolioSample from "../../images/project/portfolio-sample.png";
import rideshareApp from "../../images/project/rideshare-app.png";
import hackathonTracker from "../../images/project/hackathon-tracker.png";
import sisSample from "../../images/project/sis-sample.png";
import textSummarizer from "../../images/project/text-summarizer.png";
import votingBlockchain from "../../images/project/voting-blockchain.png";
import ticTacToe from "../../images/project/tic-tac-toe.png";

const ProjectsSection = styled.section`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  perspective: 1000px;
  height: 400px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;

  ${ProjectCard}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const CardFront = styled(CardSide)`
  background: ${props => props.darkMode ? colors.darkSecondary : colors.lightSecondary};
`;

const CardBack = styled(CardSide)`
  background: ${props => props.darkMode ? colors.darkSecondary : colors.lightSecondary};
  transform: rotateY(180deg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.darkMode ? colors.textLight : colors.textDark};
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechItem = styled.span`
  background: ${colors.primary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const ProjectLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &.github-link {
    background: #333;
    color: white;
    &:hover {
      background: #000;
    }
  }
  
  &.live-link {
    background: ${colors.primary};
    color: white;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  const projects = [
    {
      title: "Developer Portfolio",
      image: portfolioSample,
      description: "A personal portfolio showcasing my web development projects and skills.",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/DynamicDebugger/PortFolio",
      live: "https://dynamicdebugger.github.io/PortFolio/#home"
    },
    // {
    //   title: "Blockchain Voting App",
    //   image: votingBlockchain,
    //   description: "A decentralized voting platform using blockchain for secure and transparent elections.",
    //   techStack: ["JavaScript", "Solidity", "Ethereum"],
    //   github: "https://github.com/DynamicDebugger/blockchain-voting-app"
    // },
    {
      title: "OD Automation System",
      image: odAutomation,
      description: "Automates the on-duty approval process for students attending events.",
      techStack: ["ReactJS", "SpringBoot", "MongoDB"],
      github: "https://github.com/DynamicDebugger/OD-System",
      live: "https://sathybamaodportal.netlify.app/"
    },
    {
      title: "Fullstack Banking Application",
      image: fullstackBanking,
      description: "An online banking solution for managing accounts, transfers, and payments.",
      techStack: ["JavaScript", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/DynamicDebugger/FullStackBankingApplication"
    },
    {
      title: "Text Summarization Web App",
      image: textSummarizer,
      description: "An AI-powered application that summarizes long texts into concise summaries.",
      techStack: ["Python", "Flask", "NLP"],
      github: "https://github.com/DynamicDebugger/text-summarizer"
    },
    {
      title: "Student Information System",
      image: sisSample,
      description: "A web-based system for managing student records, grades, and attendance.",
      techStack: ["JSP", "Servlets", "PostgreSQL"],
      github: "https://github.com/DynamicDebugger/StudentInformationManagement"
    },
    // {
    //   title: "RideShare Application",
    //   image: rideshareApp,
    //   description: "A ride-sharing platform that connects riders and drivers for shared trips.",
    //   techStack: ["React Native", "Firebase", "Google Maps API"],
    //   github: "https://github.com/DynamicDebugger/rideshare"
    // },
    {
      title: "HackHub",
      image: hackathonTracker,
      description: "Tracks the progress of hackathons, including daily updates and timelines.",
      techStack: ["HTML/CSS", "Firebase", "JavaScript"],
      github: "https://github.com/DynamicDebugger/hackathon-tracker",
      live: "https://dynamicdebugger.github.io/hackathon-tracker/login.html"
    },
    {
      title: "Online Coding Platform",
      image: codingPlatform,
      description: "An interactive coding platform where users can solve coding challenges.",
      techStack: ["Next.js", "Firebase"],
      github: "https://github.com/DynamicDebugger/tallycode",
      live: "https://tally-code.vercel.app/"
    }
  ];

  return (
    <ProjectsSection id="projects" darkMode={darkMode}>
      <Title darkMode={darkMode}>Projects</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <CardInner>
              <CardFront darkMode={darkMode}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectTitle darkMode={darkMode}>{project.title}</ProjectTitle>
              </CardFront>
              <CardBack darkMode={darkMode}>
                <ProjectTitle darkMode={darkMode}>{project.title}</ProjectTitle>
                <ProjectDescription darkMode={darkMode}>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, i) => (
                    <TechItem key={i}>{tech}</TechItem>
                  ))}
                </TechStack>
                <ButtonGroup>
                  <ProjectLink 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    GitHub
                  </ProjectLink>
                  {project.live && (
                    <ProjectLink 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="live-link"
                    >
                      Live
                    </ProjectLink>
                  )}
                </ButtonGroup>
              </CardBack>
            </CardInner>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects; 