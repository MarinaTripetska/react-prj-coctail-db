import styled from "styled-components";
import BgImage from "../../assets/images/dark-bg2.jpg";
export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 60px 0;
  margin-top: 35px;

  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
