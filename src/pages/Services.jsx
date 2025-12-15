import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Container = styled.div`
  padding: 120px 20px 60px;
  max-width: 1100px;
  margin: 0 auto;
  font-family: "Segoe UI", sans-serif;
`;

const Title = styled.h1`
  color: ${theme.primary};
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  text-align: center;
  color: #555;
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

const Icon = styled.div`
  font-size: 40px;
  color: ${theme.primary};
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  color: ${theme.primary};
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Info = styled.p`
  color: #555;
  line-height: 1.6;
`;

export default function Services() {
  const services = [
    {
      title: "Professional Coaching",
      icon: "🏏",
      info: "Intensive coaching sessions from certified cricket professionals focusing on batting, bowling, and fielding skills.",
    },
    {
      title: "Video Analysis",
      icon: "🎥",
      info: "Detailed video-based performance analysis to help you improve your technique and strategy.",
    },
    {
      title: "Fitness Training",
      icon: "💪",
      info: "Specialized cricket fitness programs designed to improve endurance, agility, and strength.",
    },
    {
      title: "CPP Academy Membership",
      icon: "🎟️",
      info: "Exclusive membership with year-round practice opportunities and entry to special CPP tournaments.",
    },
  ];

  return (
    <Container>
      <Title>Our Services</Title>
      <Description>
        Cricket Performance Point offers top-tier cricket training and development programs to shape the next generation of champions.
      </Description>

      <ServiceGrid>
        {services.map((s, i) => (
          <Card key={i}>
            <Icon>{s.icon}</Icon>
            <CardTitle>{s.title}</CardTitle>
            <Info>{s.info}</Info>
          </Card>
        ))}
      </ServiceGrid>
    </Container>
  );
}
