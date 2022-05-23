import styled from "styled-components";
import BgImage from "../../assets/images/dark-bg.jpg";
export const StyledThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 60px 0;
  margin-top: 35px;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h1`
  color: var(--txt-color-grey);
`;
