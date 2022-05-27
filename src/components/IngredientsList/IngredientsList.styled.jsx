import styled from "styled-components";

export const GridList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 30px 0;
`;

export const Ingredient = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  font-weight: 500;
  font-size: 18px;
  min-height: 100px;
  color: var(--txt-color-white);
`;

export const IngIconThumb = styled.div`
  justify-self: start;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IngName = styled.span`
  justify-self: start;
  align-self: center;

  font-size: 22px;
  font-weight: 500;
`;

export const IngMeasure = styled.span`
  justify-self: end;
  align-self: center;
  font-style: italic;
`;
