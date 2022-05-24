import { ListCoctails } from "components/ListCoctails";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { BoldTxt, InfoTxt, Thumb } from "./DrinksByLetterView.styled";
import { Title } from "components/Title";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { getDrinksByFirstLetter } from "APIoperations/getRequests";

export const DrinksByLetterView = () => {
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
      <Thumb>
        <Title>{letter}</Title>
        <InfoTxt>
          At the moment we do not have any drinks starting with the letter
          <BoldTxt> {letter}</BoldTxt>.
        </InfoTxt>
      </Thumb>
    );
  }

  if (isSuccess && hasDrinks) {
    return (
      <Thumb>
        <Title> {letter}</Title>
        <ListCoctails drinks={data.data.drinks} />
      </Thumb>
    );
  }
};

export default DrinksByLetterView;
