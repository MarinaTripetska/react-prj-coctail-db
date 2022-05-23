import { ListCoctails } from "components/ListCoctails";
import { Title } from "components/Title";
import { Thumb } from "./DrinksByNameView.styled";

export const DrinksByNameView = ({ drinks, searchValue }) => {
  return (
    <Thumb>
      <Title text={`With the name ${searchValue} we found this:`} />
      <ListCoctails drinks={drinks} />
    </Thumb>
  );
};
