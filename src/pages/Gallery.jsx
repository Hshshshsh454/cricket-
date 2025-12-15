import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Container = styled.div`
  padding: 120px 20px 60px;
  max-width: 1200px;
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
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const ImgBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1598346762291-aee88549193e?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1600195077074-611901d028ba?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1603052870093-7c36e27cf87b?auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1617258981213-458a8c25d6a5?auto=format&fit=crop&w=900&q=60",
  ];

  return (
    <Container>
      <Title>CPP Gallery</Title>
      <Description>
        A glimpse of our players, tournaments, and memorable cricketing moments.
      </Description>

      <Grid>
        {images.map((src, i) => (
          <ImgBox key={i}>
            <img src={src} alt={`Gallery ${i + 1}`} />
          </ImgBox>
        ))}
      </Grid>
    </Container>
  );
}
