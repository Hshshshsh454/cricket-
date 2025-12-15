import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../styles/theme";

// ==================== Animations ====================
const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ==================== Styled Components ====================
const NavbarWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  z-index: 100;
`;

const TopBar = styled.div`
  background: ${theme.primary};
  color: #111;
  font-weight: 600;
  font-size: 13px;
  padding: 6px 20px;
  text-transform: uppercase;
  text-align: center;
`;

const NavMain = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: background 0.3s ease;

  @media (max-width: 900px) {
    padding: 10px 20px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 55px;
  height: auto;
  border-radius: 50%;
`;

const Brand = styled.div`
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: ${theme.primary};
  text-transform: uppercase;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 20px 0;
    border-top: 1px solid ${theme.border};
    animation: ${slideDown} 0.3s ease forwards;
    display: ${(props) => (props.$open ? "flex" : "none")};
  }
`;

const NavLink = styled.li`
  font-weight: 600;
  cursor: pointer;
  position: relative;
  color: white;
  transition: color 0.2s;
  &:hover {
    color: ${theme.primary};
  }
`;

const Dropdown = styled.ul`
  display: none;
  position: absolute;
  top: 28px;
  left: 0;
  background: rgba(0, 0, 0, 0.95);
  border-radius: 6px;
  padding: 10px 0;
  list-style: none;
  animation: ${slideDown} 0.3s ease forwards;
  min-width: 220px;
  border: 1px solid ${theme.border};
  z-index: 99;

  ${NavLink}:hover & {
    display: block;
  }

  @media (max-width: 900px) {
    position: static;
    display: block;
    background: none;
    border: none;
    padding: 0;
  }
`;

const DropdownItem = styled.li`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #ddd;
  cursor: pointer;
  &:hover {
    background: rgba(255, 193, 7, 0.15);
    color: ${theme.primary};
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, red, ${theme.primary});
  border: none;
  color: black;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.2s;
  &:hover {
    opacity: 0.85;
  }
`;

const MenuButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  width: 30px;
  height: 24px;
  gap: 5px;
  z-index: 1001;

  @media (max-width: 900px) {
    display: flex;
  }

  span {
    height: 3px;
    width: 100%;
    background: ${theme.primary};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
`;

// ==================== COMPONENT ====================

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutItems = [
    "The Anchor",
    "Executive Committee",
    "History",
    "Staff",
    "Rules & Regulations",
    "CPP Academy",
    "Social Work",
    "Talent Hunt",
    "Cricket Community",
    "Training Center",
  ];

  return (
    <NavbarWrapper>
      <TopBar>Breaking News</TopBar>

      <NavMain>
        {/* LEFT: Logo + Brand */}
        <Left>
          <Logo
            src="https://www.shutterstock.com/image-vector/cricket-player-logo-playing-short-600nw-2417878119.jpg"
            alt="CPP Logo"
          />
          <Brand>Cricket Performance Point</Brand>
        </Left>

        {/* Mobile Menu Button */}
        <MenuButton
          className={menuOpen ? "open" : ""}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButton>

        {/* NAV LINKS */}
        <NavLinks $open={menuOpen}>
          <NavLink>Home</NavLink>

          <NavLink>
            About CPP ▾
            <Dropdown>
              {aboutItems.map((item) => (
                <DropdownItem key={item}>{item}</DropdownItem>
              ))}
            </Dropdown>
          </NavLink>

          <NavLink>Tournaments</NavLink>
          <NavLink>Cricket Trial</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Gallery</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinks>

        {/* RIGHT: Registration Button */}
        <ButtonGroup>
<Button onClick={() => (window.location.href = "/registration")}>
  Registration
</Button>
        </ButtonGroup>
      </NavMain>
    </NavbarWrapper>
  );
}
