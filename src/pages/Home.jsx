import React, { useState, useEffect } from "react";
import styled from "styled-components";

// ✅ Import background images
import img1 from "../assets/Slide1.jpg";
import img2 from "../assets/Slide2.jpg";
import img3 from "../assets/Slide3.jpg";
import img4 from "../assets/Slide4.jpg";
import img5 from "../assets/Slide5.jpg";

const images = [img1, img2, img3, img4, img5];

// ========== Styled Components ==========
const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  font-family: "Segoe UI", sans-serif;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
`;

// ✅ Responsive Form
const FormCard = styled.div`
  position: absolute;
  top: 50%;
  right: 8%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.95);
  padding: 30px 40px;
  border-radius: 10px;
  width: 340px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 5;

  @media (max-width: 1024px) {
    right: 5%;
  }

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    width: 90%;
    margin: 30px auto;
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    width: 95%;
  }
`;

const Tag = styled.div`
  background: #fcd200;
  padding: 10px 18px;
  font-weight: bold;
  color: #111;
  display: inline-block;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #d60000;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 5px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
  color: #444;
  text-align: center;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  background: #fcd200;
  color: #111;
  font-weight: bold;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #e0b700;
  }
`;

const NameText = styled.h1`
  position: absolute;
  bottom: 25%;
  left: 10%;
  color: #fff;
  font-size: 2.8rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  font-weight: bold;
  z-index: 2;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    left: 5%;
    bottom: 35%;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    bottom: 40%;
    left: 5%;
  }
`;

const SubText = styled.h3`
  position: absolute;
  bottom: 20%;
  left: 10%;
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1rem;
    left: 5%;
    bottom: 30%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    bottom: 35%;
  }
`;

// ✅ Navigation Buttons
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === "left" ? "left: 25px;" : "right: 25px;")}
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  z-index: 3;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

// ✅ Dots Indicator
const Dots = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 3;
`;

const Dot = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "#fcd200" : "rgba(255,255,255,0.6)"};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #fcd200;
  }
`;

// ========== Component ==========
const HomeHero = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <HeroContainer>
      {images.map((img, i) => (
        <Slide key={i} bg={img} active={i === index} />
      ))}

      <Overlay />

      {/* Navigation */}
      <NavButton direction="left" onClick={prevSlide}>
        &#10094;
      </NavButton>
      <NavButton direction="right" onClick={nextSlide}>
        &#10095;
      </NavButton>

      {/* Founder Info */}
      <NameText>Harshit Mehta</NameText>
      <SubText>FOUNDER CPP INDIA</SubText>

      {/* Form */}
      <FormCard>
        <Tag>ONLINE REGISTRATION</Tag>
        <Title>BOOK YOUR FREE 3 DAYS</Title>
        <Subtitle>SMART CRICKET TRAINING</Subtitle>
        <form>
          <Input type="text" placeholder="Enter Name" required />
          <Input type="tel" placeholder="Enter Mobile No." required />
          <Input type="email" placeholder="Enter E-mail" required />
          <Select required>
            <option value="">Select State</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
          </Select>
          <SubmitButton type="submit">SUBMIT</SubmitButton>
        </form>
      </FormCard>

      {/* Dots */}
      <Dots>
        {images.map((_, i) => (
          <Dot key={i} active={i === index} onClick={() => setIndex(i)} />
        ))}
      </Dots>
    </HeroContainer>
  );
};

export default HomeHero;
