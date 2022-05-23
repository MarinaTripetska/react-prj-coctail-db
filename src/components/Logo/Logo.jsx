import { BiDrink } from "react-icons/bi";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;

  max-width: 250px;

  font-size: 30px;
  line-height: 1;
  font-weight: 800;
  text-decoration: none;
  color: var(--txt-color-white);

  svg {
    font-size: 60px;
  }
`;

export const Logo = () => {
  return (
    <LogoLink to="/">
      <BiDrink />
      <span>Best Home Barman</span>
    </LogoLink>
  );
};
