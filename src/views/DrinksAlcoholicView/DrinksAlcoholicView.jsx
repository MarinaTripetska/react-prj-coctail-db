import { getAlcocholicDrinks } from "APIoperations/getRequests";
import { ListCoctails } from "components/ListCoctails";
import { Loader } from "components/Loader";
import { Title } from "components/Title";
import { Toast } from "components/Toast";
import { useQuery } from "react-query";

export const DrinksAlcoholicView = () => {
  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/Alcoholic"],

    getAlcocholicDrinks,

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
      <main>
        <Title>Alcoholic drinks</Title>
        <ListCoctails drinks={data.data.drinks} />
      </main>
    );
  }
};
