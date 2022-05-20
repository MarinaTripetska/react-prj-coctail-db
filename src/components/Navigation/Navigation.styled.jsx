import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

export const GridList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 10px 0;
  text-decoration: none;
  color: var(--txt-color-grey);
  cursor: pointer;

  &.active {
    color: var(--txt-color-blue);
  }
`;
