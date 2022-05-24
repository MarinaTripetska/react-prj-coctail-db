import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import { getDrinkById } from "APIoperations/getRequests";

export const SingleDrinkPage = () => {
  const { drinksId } = useParams();

  const { data, isSuccess } = useQuery(
    `drink/${drinksId}`,

    () => getDrinkById(drinksId)
  );
  const drink = data?.data?.drinks[0];
  return isSuccess && drink && <div>{drink.strDrink}</div>;
};
