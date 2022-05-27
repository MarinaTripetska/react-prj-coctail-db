import styled from "styled-components";
import BgImage from "../../assets/images/bg-for-drink.jpg";

export const DrinkThumb = styled.div`
  padding: 45px 30px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${BgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
`;

export const Title = styled.h1`
  padding: 30px 0;
  text-align: center;
  font-size: 30px;
  line-height: 1;
  font-weight: 800;
  text-decoration: none;
  color: var(--txt-color-white);
`;

export const CathegoryGrid = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  min-width: 250px;

  position: absolute;
  right: -50px;
  top: 20px;
`;

export const CathegoryItem = styled.li`
  position: relative;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  min-width: 200px;
  min-height: 50px;
  background-color: transparent;
  border-radius: 10px;
  border: 3.5px solid #4681e7;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  line-height: 40px;
  color: var(--txt-color-white);

  cursor: pointer;
  transition: right 500ms ease-in-out;

  :hover {
    right: 70px;
  }
`;
