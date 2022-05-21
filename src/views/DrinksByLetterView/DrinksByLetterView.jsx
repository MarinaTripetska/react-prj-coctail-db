import { ListCoctails } from "components/ListCoctails";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

export const DrinksByLetterView = () => {
  const { letter } = useParams();

  const { data, isError, error, isSuccess, isFetching } = useQuery(
    ["drinks/byFirstLetter", letter],
    () =>
      axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      )
  );
  const hasDrinks = data?.data?.drinks;
  if (isFetching) {
    return <p>...Loading</p>;
  }
  if (isSuccess && !hasDrinks) {
    return (
      <p>At now we havent any drinks that start from {letter.toUpperCase()}</p>
    );
  }
  if (isSuccess && hasDrinks) {
    return (
      <>
        <h1>{letter.toUpperCase()}</h1>
        <ListCoctails drinks={data.data.drinks} />
      </>
    );
  }
  // if (isError) {
  //   console.log(error);
  // }
};

export default DrinksByLetterView;
