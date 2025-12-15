import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Section = styled.section`
  border: 1px solid ${theme.border};
  border-radius: 14px;
  padding: 16px;
  background: ${theme.inputBg};
  margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 16px;
  color: ${theme.primary};
`;

export default function FormSection({ title, children }) {
  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Section>
  );
}
