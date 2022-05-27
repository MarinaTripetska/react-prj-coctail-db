import { getHomemadeLiqueurDrinks } from "APIoperations/getRequests";
import { ListDrinksTemplate } from "components/ListDrinksTemplate";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

const DrinksHomemadeLiqueurView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/HomemadeLiqueur"],

    getHomemadeLiqueurDrinks,

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
        title="Homemade liqueurs"
        drinksData={data.data.drinks}
      />
    );
  }
};

export default DrinksHomemadeLiqueurView;
