import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { colors } from "../../styles/CommonStyles";
import Profile from "../../images/balapic.jpg";

const AboutSection = styled.section`
  padding: 100px 0;
  font-family: "Poppins", sans-serif;
  background: ${(props) => (props.darkMode ? colors.darkBg : colors.lightBg)};
  color: ${(props) => (props.darkMode ? colors.textLight : colors.textDark)};
`;

const MaxWidth = styled.div`
  max-width: 1300px;
  padding: 0 80px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: ${(props) => (props.darkMode ? colors.textLight : colors.textDark)};

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 400px;
  margin-right: 20px;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const RightColumn = styled.div`
  flex: 2;
  max-width: 600px;
`;

const Description = styled.div`
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: ${(props) => (props.darkMode ? colors.textLight : colors.textDark)};
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.125rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: ${colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primaryDark};
    transform: translateY(-2px);
  }
`;

const HighlightsSection = styled.section`
  margin-top: 40px;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled.div`
  background: ${(props) =>
    props.darkMode ? colors.darkSecondary : colors.lightSecondary};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.darkMode
      ? "0 4px 20px rgba(0, 0, 0, 0.3)"
      : "0 4px 20px rgba(0, 0, 0, 0.1)"};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const HighlightTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HighlightDate = styled.p`
  font-size: 1rem;
  color: ${(props) => (props.darkMode ? "rgba(255, 255, 255, 0.6)" : "#666")};
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const LeetCodeStatsSection = styled.div`
  flex: 1;
  text-align: center;
  margin-right: 20px;
`;

const MediumPostSection = styled.div`
  flex: 1;
  text-align: center;
`;

const LeetCodeCard = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const MediumPostImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const MediumPostLink = styled.a`
  color: ${colors.primary};
  text-decoration: underline;
  font-weight: 600;
`;

const Quote = styled.blockquote`
  font-size: 1.35rem;
  font-style: italic;
  text-align: center;
  margin: 20px 0;
  color: ${colors.primary};
  font-family: 'Georgia', serif;
  border-left: 4px solid ${colors.primary};
  padding-left: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Footer = styled.footer`
  text-align: center;
  // margin-top: 40px;
  font-size: 1.3rem;
  font-style: italic;
  color: ${(props) => (props.darkMode ? "rgba(255, 255, 255, 0.6)" : "#666")};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  const professionalHighlights = [
    { title: "Career Mentoring Program, Intercell", date: "May 2024" },
    {
      title: "Winner, Exploring AI Event - National Level Technical Symposium",
      date: "April 2024",
    },
    {
      title: "Responsive Web Design Certification, freeCodeCamp",
      date: "March 2024",
    },
    {
      title: "Programming with JavaScript, Meta Coursera",
      date: "January 2024",
    },
    { title: "HackerRank (5-★) in Problem Solving", date: "December 2023" },
    { title: "Java (Basic) Certificate on HackerRank", date: "December 2023" },
    {
      title: "SQL (Intermediate) Certificate on HackerRank",
      date: "October 2023",
    },
    {
      title: "Database Management Systems (DBMS), IIT Kanpur NPTEL",
      date: "September 2023",
    },
  ];

  return (
    <AboutSection id="about" darkMode={darkMode}>
      <MaxWidth>
        <Title darkMode={darkMode}>About Me</Title>
        <AboutContent>
          <LeftColumn>
            <img src={Profile} alt="Profile" />
          </LeftColumn>
          <RightColumn>
            <Description>
              <Text darkMode={darkMode}>
                Hi, my name is Balasubramani Elamurugan, and I'm an aspiring
                Full Stack Developer with a solid foundation in computer science
                and hands-on experience in building efficient, scalable web
                applications. Currently in my final year, I am passionate about
                using technology to solve real-world problems through creative
                and impactful solutions.
              </Text>
              <Text darkMode={darkMode}>
                Hackathons have been pivotal in shaping my development skills
                and mindset. By participating in various events, I've gained
                valuable experience working with diverse teams, tackling complex
                challenges, and managing tight deadlines. Winning the
                national-level Exploring AI Event marked a significant
                achievement, reinforcing my belief in the power of learning by
                doing.
              </Text>
              <Text darkMode={darkMode}>
                During my internship at HCL, I further honed my skills in Java,
                JavaScript, Spring Boot, APIs, and database management,
                developing secure and efficient web applications. Notable
                projects like an online banking application and a student
                information system demonstrate my ability to handle complex
                requirements and deliver impactful results.
              </Text>
            </Description>
            <ResumeButton
              href="https://drive.google.com/file/d/1xSMZFRYbP3ectzGDu4i2LE-haSwnOzqZ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </ResumeButton>
          </RightColumn>
        </AboutContent>
        <Quote>"1% better every day compounds tiny changes."</Quote>
        <HighlightsSection>
          <SubTitle>Professional Highlights</SubTitle>
          <HighlightsGrid>
            {professionalHighlights.map((highlight, index) => (
              <HighlightCard key={index} darkMode={darkMode}>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <HighlightDate>{highlight.date}</HighlightDate>
              </HighlightCard>
            ))}
          </HighlightsGrid>

          <StatsContainer>
            <LeetCodeStatsSection>
              <SubTitle>LeetCode Stats</SubTitle>
              <LeetCodeCard
                src="https://leetcard.jacoblin.cool/balasubramani285?theme=dark&font=Nunito&ext"
                alt="LeetCode Stats"
              />
              <MediumPostLink
                href="https://leetcode.com/u/balasubramani285/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              ></MediumPostLink>
            </LeetCodeStatsSection>

            <MediumPostSection>
              <SubTitle>Recent Medium Post</SubTitle>
              <a
                target="_blank"
                href="https://github-readme-medium-recent-article.vercel.app/medium/@balasubramani285/1"
              >
                <img
                  src="https://github-readme-medium-recent-article.vercel.app/medium/@balasubramani285/1"
                  alt="Recent Article 1"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
              <a
                target="_blank"
                href="https://github-readme-medium-recent-article.vercel.app/medium/@balasubramani285/0"
              >
                <img
                  src="https://github-readme-medium-recent-article.vercel.app/medium/@balasubramani285/0"
                  alt="Recent Article 0"
                />
              </a>
              <a
                target="_blank"
                href="https://github-readme-medium-recent-article.vercel.app/medium/@balasubramani285/3"
              >
                <img
                  src="https://github-readme-medium-recent-article.vercel.app/medium/@balasubramani285/3"
                  alt="Recent Article 3"
                />
              </a>
            </MediumPostSection>
          </StatsContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <a
              href="https://leetcode.com/u/balasubramani285/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: "50%",
                backgroundColor: darkMode ? "#333" : "white",
                padding: "12px",
                margin: "0 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = darkMode
                  ? "#444"
                  : "#e0e0e0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = darkMode
                  ? "#333"
                  : "white")
              }
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ab/LeetCode_logo_white_no_text.svg"
                alt="LeetCode Icon"
                style={{ width: "33px", height: "33px" }}
              />
            </a>

            <a
              href="https://medium.com/@balasubramani285"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderRadius: "50%",
                backgroundColor: darkMode ? "#333" : "white",
                padding: "12px",
                margin: "0 10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                transition: "background-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = darkMode
                  ? "#444"
                  : "#e0e0e0")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = darkMode
                  ? "#333"
                  : "white")
              }
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Medium_logo_Monogram.svg"
                alt="Medium Icon"
                style={{ width: "33px", height: "33px" }}
              />
            </a>
          </div>
        </HighlightsSection>

        <Footer>
          <p>
            I am actively seeking full-time opportunities to leverage my skills
            in a challenging environment. Explore my
            <MediumPostLink
              href="https://www.linkedin.com/in/balasubramani-e/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </MediumPostLink>
            for detailed project descriptions and my educational background. I
            believe that 1% effort every day can compound into significant
            changes, and I am excited to contribute to innovative projects in
            the tech industry.
          </p>
        </Footer>
      </MaxWidth>
    </AboutSection>
  );
};

export default About;
