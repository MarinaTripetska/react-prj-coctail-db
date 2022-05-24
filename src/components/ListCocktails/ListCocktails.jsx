import { Card } from "components/Card";
import { GridItem, GridList } from "./ListCocktails.styled";

export const ListCocktails = ({ drinks }) => {
  return (
    <GridList>
      {drinks.map(({ idDrink, strDrink, strDrinkThumb }) => (
        <GridItem key={idDrink}>
          <Card id={idDrink} name={strDrink} imgUrl={strDrinkThumb} />
        </GridItem>
      ))}
    </GridList>
  );
};
