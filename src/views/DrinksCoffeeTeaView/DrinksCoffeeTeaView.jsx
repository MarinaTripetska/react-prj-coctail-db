import { getCoffeeTeaDrinks } from "APIoperations/getRequests";
import { ListDrinksTemplate } from "components/ListDrinksTemplate";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

const DrinksCoffeeTeaView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/Coffe/Tea"],

    getCoffeeTeaDrinks,

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
        title="Coffee and tea drinks"
        drinksData={data.data.drinks}
      />
    );
  }
};

export default DrinksCoffeeTeaView;
