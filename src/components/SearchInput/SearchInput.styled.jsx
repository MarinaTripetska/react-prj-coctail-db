import styled from "styled-components";
import { GoSearch } from "react-icons/go";
export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  position: relative;
  left: 40px;

  &:active svg,
  &:hover svg,
  &:focus svg {
    color: var(--txt-color-blue);
  }
`;

export const SearchIcon = styled(GoSearch)`
  color: var(--txt-color-grey);
`;

export const Input = styled.input`
  width: 100%;
  max-width: 500px;
  min-height: 45px;
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: solid 3px var(--txt-color-grey);
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  padding-left: 50px;
  color: var(--txt-color-grey);
  &:focus {
    border-bottom: solid 3px var(--txt-color-blue);
  }
  &::placeholder {
    text-align: center;
  }
`;
