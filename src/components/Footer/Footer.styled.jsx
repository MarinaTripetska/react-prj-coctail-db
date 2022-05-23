import styled from "styled-components";

export const FooterStyled = styled.footer`
  height: 100px;

  font-size: 18px;
  /* line-height: 2; */
  font-weight: bold;
  padding: 20px 0;
  color: var(--txt-color-grey);
  background-color: var(--main-bg-color);
`;

export const GridThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AuthorInfoThumb = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 170px;
`;
