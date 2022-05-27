import { getPunchPartyDrinks } from "APIoperations/getRequests";
import { ListDrinksTemplate } from "components/ListDrinksTemplate";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

const DrinksPunchPartyDrinkView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/Punch/PartyDrink"],

    getPunchPartyDrinks,

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
        title="Punch and Party drinks"
        drinksData={data.data.drinks}
      />
    );
  }
};

export default DrinksPunchPartyDrinkView;
