import { ListCoctails } from "components/ListCoctails";
import { useParams } from "react-router-dom";
import { useGetCoctailsListByFirstLatterQuery } from "../../redux/app/coktails";

const CoktailsByLetterPage = () => {
  const { letter } = useParams();

  const {
    data: coktails,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCoctailsListByFirstLatterQuery(letter);
  if (isSuccess) {
    console.log(coktails);
    return <ListCoctails coktails={coktails.drinks} />;
  }
};

export default CoktailsByLetterPage;
