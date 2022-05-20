import { useParams } from "react-router-dom";
import { useGetOneCoctailByIdQuery } from "redux/app/coktails";

export const SingleCoktailPage = () => {
  const { coktailId } = useParams();

  const {
    data: coktail,
    error,
    isSuccess,
    isError,
    isFetching,
  } = useGetOneCoctailByIdQuery(coktailId);

  console.log(coktail?.drinks[0]);

  return isSuccess && <div>Single coktail page</div>;
};
