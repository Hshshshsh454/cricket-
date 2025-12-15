import React from "react";
import styled from "styled-components";

// Background image
const bgImage =
  "https://www.cricketperformancepoint.com/assets/img/bg-stadium.jpg";

// ===== Styled Components =====
const AboutSection = styled.section`
  position: relative;
  background: url(${bgImage}) center/cover no-repeat;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;
  font-family: "Segoe UI", sans-serif;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1100px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  color: #fcd200;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #eee;
  max-width: 800px;
  margin: 0 auto 40px auto;
  line-height: 1.7;
`;

const Highlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
`;

const HighlightCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 25px 30px;
  max-width: 300px;
  text-align: left;
  transition: 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-5px);
  }

  h3 {
    color: #fcd200;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    color: #ddd;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const MissionSection = styled.div`
  margin-top: 70px;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 12px;
  text-align: left;

  h2 {
    color: #fcd200;
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  p {
    color: #eee;
    line-height: 1.7;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <Wrapper>
        <Title>About Cricket Performance Point</Title>
        <Subtitle>
          Cricket Performance Point (CPP) is India’s fastest-growing platform
          for professional cricket training. Our mission is to provide every
          aspiring cricketer with access to world-class coaching, exposure, and
          growth opportunities.
        </Subtitle>

        <Highlights>
          <HighlightCard>
            <h3>🏏 Professional Coaching</h3>
            <p>
              Train under expert-level coaches with decades of experience in
              cricket academies and international tournaments.
            </p>
          </HighlightCard>

          <HighlightCard>
            <h3>🌍 Pan-India Presence</h3>
            <p>
              CPP operates in 10+ major cities, ensuring that young talent from
              across India gets equal opportunity to shine.
            </p>
          </HighlightCard>

          <HighlightCard>
            <h3>🎯 Proven Success Stories</h3>
            <p>
              Our alumni have gone on to play at the national level — including
              Yashasvi Jaiswal, who started his journey with CPP.
            </p>
          </HighlightCard>
        </Highlights>

        <MissionSection>
          <h2>🎓 Our Mission & Vision</h2>
          <p>
            CPP’s mission is to bridge the gap between grassroots cricket and
            professional performance. We focus on developing technical skills,
            game awareness, and mental strength to prepare players for the
            highest level. Our vision is to make India’s next generation of
            cricketers ready for the global stage.
          </p>
        </MissionSection>
      </Wrapper>
    </AboutSection>
  );
};

export default About;
