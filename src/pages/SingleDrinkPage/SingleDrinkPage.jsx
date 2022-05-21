import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

export const SingleDrinkPage = () => {
  const { drinksId } = useParams();

  const { data, isSuccess } = useQuery(`drink/${drinksId}`, () =>
    axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinksId}`
    )
  );
  const drink = data?.data?.drinks[0];
  return isSuccess && drink && <div>{drink.strDrink}</div>;
};
