import styled from "styled-components";

export const StyledThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 60px 0;
  margin-top: 35px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: relative;
`;

export const TitleThumb = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const Gradient = styled.div`
  position: absolute;
  top: 140px;
  z-index: 2;
  height: 600px;
  width: 1000px;
  pointer-events: none;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0) 65%,
    rgba(0, 0, 0, 0.9976365546218487) 92%
  );
`;
