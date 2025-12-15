import React from "react";
import styled from "styled-components";

// 🖼️ Replace this with your real online logo URL
const cppLogo =
  "https://www.shutterstock.com/image-vector/cricket-player-logo-playing-short-600nw-2417878119.jpg";

// ========== Styled Components ==========
const FooterContainer = styled.footer`
  background: #111;
  color: #eaeaea;
  padding: 60px 40px 20px;
  text-align: center;
  font-family: "Segoe UI", sans-serif;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoBox = styled.div`
  flex: 1 1 250px;

  img {
    width: 100px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 0;
  }
`;

const Description = styled.p`
  flex: 2 1 400px;
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.6;
  margin-top: 10px;
`;

const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #333;
  margin: 30px 0;
`;

const ContactSection = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const ContactTitle = styled.h3`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  text-align: center;
  color: #fff;
`;

const ContactItem = styled.div`
  border-right: 1px solid #333;

  &:last-child {
    border-right: none;
  }

  h4 {
    font-size: 0.9rem;
    color: #fff;
    margin-bottom: 5px;
  }

  a {
    color: #fcd200;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #fff;
    }
  }
`;

const BottomLinks = styled.div`
  border-top: 1px solid #333;
  margin-top: 30px;
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 0.9rem;

    &:hover {
      color: #fff;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.85rem;
  color: #aaa;
  margin-top: 15px;

  span {
    color: #fff;
    font-weight: bold;
  }
`;

// ========== Component ==========
const Footer = () => {
  return (
    <FooterContainer>
      {/* Top Section */}
      <TopSection>
        <LogoBox>
          <img src={cppLogo} alt="CPP Logo" />
          <h2>CRICKET PERFORMANCE POINT</h2>
        </LogoBox>

        <Description>
          At CPP, be prepared to upskill yourself to a highly professional level
          of cricket. If our protege Yashasvi Jaiswal can make it big at such a
          young age, so can you. No matter whether you are a batter, bowler, or
          keeper — and no matter which part of India you live in — we’ve got the
          expertise, planning, and resources to build an illustrious cricket
          career for you.
        </Description>
      </TopSection>

      <Divider />

      {/* Contact Section */}
      <ContactSection>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactGrid>
          <ContactItem>
            <h4>MUMBAI</h4>
            <a href="tel:+919321941094">+91 9321941094</a>
          </ContactItem>
          <ContactItem>
            <h4>BHADOHI UTTAR PRADESH</h4>
            <a href="tel:+917388078444">+91 7388078444</a>
          </ContactItem>
          <ContactItem>
            <h4>GURUGRAM HARYANA</h4>
            <a href="tel:+919839151177">+91 9839151177</a>
          </ContactItem>
          <ContactItem>
            <h4>PRATAPGARH UTTAR PRADESH</h4>
            <a href="tel:+917388071444">+91 7388071444</a>
          </ContactItem>
        </ContactGrid>
      </ContactSection>

      <Divider />

      {/* Bottom Links */}
      <BottomLinks>
        <a href="#">About CPP</a>
        <a href="#">Talent Hunt</a>
        <a href="#">Press</a>
        <a href="#">Anchor</a>
        <a href="#">Shop</a>
        <a href="#">Cricket Community</a>
      </BottomLinks>

      <Copyright>
        Copyright © 2022 <span>Chillicreations</span>. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
