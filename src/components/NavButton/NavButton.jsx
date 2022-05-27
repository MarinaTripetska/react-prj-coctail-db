import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import styled from "styled-components";

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 10px 0;
  font-size: 25px;
  line-height: 1;

  text-decoration: none;
  color: var(--txt-color-grey);
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 350ms ease-in-out;

  :hover,
  :focus {
    color: var(--txt-color-blue);
  }
`;

export const NavButton = () => {
  const navigate = useNavigate();

  return (
    <Button type="button" onClick={() => navigate(-1)}>
      <TiArrowBackOutline />
    </Button>
  );
};
