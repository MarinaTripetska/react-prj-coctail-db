import { ListCoctails } from "components/ListCoctails";

export const DrinksByNameView = ({ drinks, searchValue }) => {
  return (
    <>
      <h1>With name {searchValue} we find this:</h1>
      <ListCoctails drinks={drinks} />
    </>
  );
};
