import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: var(--main-bg-color);
  display: flex;
  align-items: center;
  min-height: 100px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  max-width: 250px;

  position: absolute;

  font-size: 30px;
  line-height: 1;
  font-weight: 800;
  text-decoration: none;
  color: var(--txt-color-white);
  svg {
    font-size: 60px;
  }
`;
