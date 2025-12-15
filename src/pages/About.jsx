import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 40px;
  text-align: center;
`;

const About = () => {
  return (
    <Container>
      <h1>About CPP</h1>
      <p>Learn about our mission, vision, and cricket excellence programs.</p>
    </Container>
  );
};

export default About;
