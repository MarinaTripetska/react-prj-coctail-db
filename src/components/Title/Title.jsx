import styled from "styled-components";

const TitleStyled = styled.h1`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  color: var(--txt-color-grey);
`;

export const Title = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};
