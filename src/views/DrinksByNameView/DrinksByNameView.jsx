import { ListDrinksTemplate } from "components/ListDrinksTemplate";

const DrinksByNameView = ({ drinks, searchValue }) => {
  return (
    <ListDrinksTemplate
      title={`With the name ${searchValue} we found this:`}
      drinksData={drinks}
    />
  );
};

export default DrinksByNameView;
