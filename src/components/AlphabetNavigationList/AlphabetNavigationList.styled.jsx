import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const GridList = styled.ul`
  margin: 500px auto 50px auto;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

export const GridItem = styled.li`
  background-color: #ffd;
  border: solid 1px black;
`;
export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 500;
  color: black;

  &.active {
    color: tomato;
  }
`;
