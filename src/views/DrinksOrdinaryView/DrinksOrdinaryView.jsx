import { getOrdinaryDrinks } from "APIoperations/getRequests";
import { ListDrinksTemplate } from "components/ListDrinksTemplate";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

export const DrinksOrdinaryView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/Ordynary"],

    getOrdinaryDrinks,

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
      <ListDrinksTemplate
        title="Ordinary drinks"
        drinksData={data.data.drinks}
      />
    );
  }
};
