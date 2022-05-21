import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export const RandomDrinkView = () => {
  const { data, isLoading, isError, isSuccess, error } = useQuery(
    "drink/randomDrink",
    () => axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php"),
    {
      cacheTime: 0,
      refetchOnMount: false,
      retry: 1,
    }
  );
  const drink = data?.data?.drinks[0];

  if (isLoading) {
    return <p>Loading random drink</p>;
  }

  if (isSuccess && drink) {
    return (
      <Link to={`/drink/${drink.idDrink}`}>
        <div>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          <h2>{drink.strDrink}</h2>
        </div>
      </Link>
    );
  }

  if (isError) {
    return <p>{error.message}</p>;
  }
};
