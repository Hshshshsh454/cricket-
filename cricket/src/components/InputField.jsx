import React from "react";
import styled from "styled-components";
import { theme } from "../styles/theme";

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
`;

const Input = styled.input`
  height: 40px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid ${theme.inputBorder};
  background: ${theme.card};
  color: ${theme.text};
  outline: none;
  transition: border .15s ease, box-shadow .15s ease;
  &:focus {
    border-color: ${theme.primary};
    box-shadow: 0 0 0 2px rgba(255,193,7,0.2);
  }
`;

export default function InputField({ label, ...props }) {
  return (
    <Field>
      {label}
      <Input {...props} />
    </Field>
  );
}
