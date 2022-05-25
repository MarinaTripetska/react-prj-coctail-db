import { Link, useLocation } from "react-router-dom";
import { ImArrowLeft2 } from "react-icons/im";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px;
  text-decoration: none;
  color: var(--txt-color-blue);
  transition: color 350ms ease-in-out;

  :hover,
  :focus {
    color: var(--txt-color-white);
  }
`;

export const NavButton = () => {
  const location = useLocation();
  const pathname = location.state?.from;
  const search = location.state?.search;

  return (
    <StyledLink
      to={pathname ? `${pathname}${search}` : "/"}
      // to={pathname ? `${pathname}` : "/"}
      title="Comeback button"
    >
      <ImArrowLeft2 />
    </StyledLink>
  );
};
