import { getNonAlcocholicDrinks } from "APIoperations/getRequests";
import { ListDrinksTemplate } from "components/ListDrinksTemplate";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

const DrinksNonAlcoholicView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/NonAlcoholic"],

    getNonAlcocholicDrinks,

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
        title="Non Alcoholic drinks"
        drinksData={data.data.drinks}
      />
    );
  }
};

export default DrinksNonAlcoholicView;
