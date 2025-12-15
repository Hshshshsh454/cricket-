import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { height: 100%; margin: 0; }
  body {
    background: radial-gradient(1200px 800px at 20% -10%, rgba(255,193,7,0.08), transparent 60%),
                radial-gradient(800px 600px at 120% 10%, rgba(255,193,7,0.06), transparent 60%),
                ${theme.bg};
    color: ${theme.text};
    font-family: "Inter", system-ui, sans-serif;
  }
  ::selection { background: ${theme.primary}; color: #111; }
`;
