import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Container = styled.div`
  padding: 120px 20px 60px;
  max-width: 800px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: none;
`;

const Button = styled.button`
  background: linear-gradient(90deg, red, ${theme.primary});
  border: none;
  color: black;
  font-weight: 700;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.85;
  }
`;

const InfoSection = styled.div`
  margin-top: 40px;
  text-align: center;
  color: #444;
  line-height: 1.8;
`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Description>
        Have questions or want to join CPP? Fill out the form below and we’ll get back to you soon.
      </Description>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          rows="4"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>

      <InfoSection>
        <p>
          📍 <strong>Address:</strong> CPP HQ, Mumbai, India
        </p>
        <p>
          📞 <strong>Phone:</strong> +91 9839151177 / +91 7388071444
        </p>
        <p>
          📧 <strong>Email:</strong> info@cppindia.com
        </p>
      </InfoSection>
    </Container>
  );
}
