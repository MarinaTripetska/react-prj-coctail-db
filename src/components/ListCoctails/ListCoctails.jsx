import { MainContainer } from "components/BasicStyledComponents/BasicStyledComponents";
import { Card } from "components/Card";
import { GridItem, GridList } from "./ListCoctails.styled";

export const ListCoctails = ({ drinks }) => {
  return (
    <MainContainer>
      <GridList>
        {drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
          <GridItem key={idDrink}>
            <Card id={idDrink} name={strDrink} imgUrl={strDrinkThumb} />
          </GridItem>
        ))}
      </GridList>
    </MainContainer>
  );
};
