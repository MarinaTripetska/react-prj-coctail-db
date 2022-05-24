import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { BoldTxt, InfoTxt } from "./DrinksByLetterView.styled";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { getDrinksByFirstLetter } from "APIoperations/getRequests";
import { ListDrinksTemplate } from "components/ListDrinksTemplate";

const DrinksByLetterView = () => {
  const { letter } = useParams();

  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/byFirstLetter", letter],

    () => getDrinksByFirstLetter(letter),

    {
      onError: (error) => Toast.notifyERROR(error.message),
    }
  );

  const hasDrinks = data?.data?.drinks;

  if (isFetching) {
    return <Loader />;
  }

  if (isSuccess && !hasDrinks) {
    return (
      <ListDrinksTemplate title={letter}>
        <InfoTxt>
          At the moment we do not have any drinks starting with the letter{" "}
          <BoldTxt> {letter}</BoldTxt>.
        </InfoTxt>
      </ListDrinksTemplate>
    );
  }

  if (isSuccess && hasDrinks) {
    return <ListDrinksTemplate title={letter} drinksData={data.data.drinks} />;
  }
};

export default DrinksByLetterView;
