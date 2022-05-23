import { ListCoctails } from "components/ListCoctails";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { BoldTxt, InfoTxt, Thumb, Title } from "./DrinksByLetterView.styled";

export const DrinksByLetterView = () => {
  const { letter } = useParams();

  const { data, isSuccess, isFetching } = useQuery(
    ["drinks/byFirstLetter", letter],
    () =>
      axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      )
  );
  const hasDrinks = data?.data?.drinks;

  if (isFetching) {
    return <p>...Loading</p>;
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
        <Title>{letter}</Title>
        <ListCoctails drinks={data.data.drinks} />
      </Thumb>
    );
  }
  // if (isError) {
  //   console.log(error);
  // }
};

export default DrinksByLetterView;
