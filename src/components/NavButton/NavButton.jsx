import { Link, useLocation } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
  /* //   position: absolute;
//   left: 30px;
//   top: 15px; */
  padding: 5px;
  text-decoration: none;
  color: var(--txt-color-blue);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: var(--txt-color-white);
  }
`;

export const NavButton = () => {
  const location = useLocation();
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;

  return (
    <StyledLink
      to={pathname ? `${pathname}${search}` : "/"}
      title="Comeback button"
    >
      <ImArrowLeft2 />
    </StyledLink>
  );
};
