import styled from "styled-components";
import Plaseholder from "../../assets/images/dark-bg2.jpg";

export const BgImageThumb = styled.div`
  background-color: var(--main-bg-color);

  background-image: url("${({ imgObj }) => (imgObj ? imgObj : Plaseholder)}");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  min-height: 70vh;
`;

export const ContentThumb = styled.div`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;
