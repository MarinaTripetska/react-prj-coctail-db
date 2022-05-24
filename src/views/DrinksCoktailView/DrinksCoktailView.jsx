import { getCoktailDrinks } from "APIoperations/getRequests";
import { ListDrinksTemplate } from "components/ListDrinksTemplate";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

const DrinksCoktailView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/Coktails"],

    getCoktailDrinks,

    {
      onError: (error) => Toast.notifyERROR(error.message),
    }
  );

  const hasDrinks = data?.data?.drinks;

  if (isFetching) {
    return <Loader />;
  }

  if (isSuccess && hasDrinks) {
    return (
      <ListDrinksTemplate title="Coktails" drinksData={data.data.drinks} />
    );
  }
};

export default DrinksCoktailView;
