import styled from "styled-components";
import Background from "../../assets/images/brick-wall.jpg";

export const Thumb = styled.div`
  padding: 60px 0;
  margin-top: 35px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  min-height: 80vh;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: var(--txt-color-grey);
`;

export const InfoTxt = styled.p`
  margin-top: 100px;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: var(--txt-color-white);
`;

export const BoldTxt = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 20px;
`;
