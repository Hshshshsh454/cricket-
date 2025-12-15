import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Container = styled.div`
  padding: 120px 20px 60px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Segoe UI", sans-serif;
  color: #222;

  @media (max-width: 768px) {
    padding: 100px 15px 40px;
  }
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

const Section = styled.div`
  margin-top: 40px;
`;

const Heading = styled.h2`
  color: ${theme.primary};
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #444;
  line-height: 1.6;
`;

const List = styled.ul`
  margin-left: 20px;
  color: #555;
  line-height: 1.8;
`;

const Highlight = styled.span`
  color: #d60000;
  font-weight: bold;
`;

export default function CricketTrial() {
  return (
    <Container>
      <Title>Cricket Trials 2025</Title>
      <Description>
        Get ready to showcase your talent at the CPP Cricket Trials. 
        Train with professional coaches, gain exposure, and earn your spot on the CPP National Team!
      </Description>

      <Section>
        <Heading>Trial Categories</Heading>
        <List>
          <li>Under 14</li>
          <li>Under 17</li>
          <li>Under 19</li>
          <li>Open Category</li>
        </List>
      </Section>

      <Section>
        <Heading>Registration Process</Heading>
        <Text>
          Register online by filling out the CPP official form. Bring your ID proof,
          cricket kit, and arrive at the venue on time. 
          <Highlight> Entry Fee: ₹800 (Members) / ₹1500 (Non-Members)</Highlight>
        </Text>
      </Section>

      <Section>
        <Heading>What You’ll Get</Heading>
        <List>
          <li>Performance analysis by certified coaches.</li>
          <li>Video recording of your performance.</li>
          <li>Participation certificate from CPP India.</li>
          <li>Chance to join the CPP Elite Training Program.</li>
        </List>
      </Section>
    </Container>
  );
}
