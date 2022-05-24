import { ListDrinksTemplate } from "components/ListDrinksTemplate";

export const DrinksByNameView = ({ drinks, searchValue }) => {
  return (
    <ListDrinksTemplate
      title={`With the name ${searchValue} we found this:`}
      drinksData={drinks}
    />
  );
};
