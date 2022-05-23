import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const GridList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const GridItem = styled.li``;

export const NavLinkStyled = styled(NavLink)`
  font-weight: 700;
  font-size: 38px;
  line-height: 1.1;
  text-decoration: none;

  background-color: #2aa5a0;
  background-image: linear-gradient(180deg, #fe6783 20%, #ffbf84 97.1%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &.active,
  &:hover,
  &:focus {
    transition: background ease 1000ms;
    background-image: linear-gradient(#6e6783 20%, #fe6783 85%);
  }
`;
