import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  min-height: 450px;

  padding: 20px 10px 30px 10px;
  border-radius: 10px;
  box-shadow: rgba(255, 254, 254, 0.19) 0px 10px 20px,
    rgba(255, 255, 255, 0.23) 0px 6px 6px;
  background-color: var(--main-bg-color);
  transition: transform ease-in-out 350ms, box-shadow ease-in-out 350ms;

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: rgba(255, 251, 215, 0.19) 0px 10px 20px,
      rgba(255, 196, 119, 0.23) 0px 6px 6px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 280px;
  object-position: center;
  object-fit: cover;
`;

export const TitleThumb = styled.div`
  background-color: #04051d;

  min-width: 80%;
  padding: 5px, 15px;
  border-radius: 15px;
  box-shadow: rgba(255, 254, 254, 0.19) 0px 10px 20px,
    rgba(255, 255, 255, 0.23) 0px 6px 6px;
`;
export const Title = styled.h2`
  text-align: center;
  color: var(--txt-color-white);
`;
