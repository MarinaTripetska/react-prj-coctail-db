import { getShotDrinks } from "APIoperations/getRequests";
import { ListDrinksTemplate } from "components/ListDrinksTemplate";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

const DrinksShotView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/Shot"],

    getShotDrinks,

    {
      onError: (error) => Toast.notifyERROR(error.message),
    }
  );

  const hasDrinks = data?.data?.drinks;

  if (isFetching) {
    return <Loader />;
  }

  if (isSuccess && hasDrinks) {
    return <ListDrinksTemplate title="Shots" drinksData={data.data.drinks} />;
  }
};
export default DrinksShotView;
