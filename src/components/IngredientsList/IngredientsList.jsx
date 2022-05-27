import {
  GridList,
  IngIconThumb,
  IngMeasure,
  IngName,
  Ingredient,
} from "./IngredientsList.styled";
import ClipLoader from "react-spinners/ClipLoader";
import { useQueries } from "react-query";
import { getIngredientsIcons } from "APIoperations/getRequests";

export const IngredientsList = ({ ingredients, measure }) => {
  const ingredientsIcons = useQueries(
    ingredients.map((ing) => {
      return {
        queryKey: ["ingredientsImg", ing],
        queryFn: () => getIngredientsIcons(ing),
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: 1,
        onError: (error) => console.log(error),
      };
    })
  );

  return (
    <GridList>
      {ingredients.map((ing, i) => (
        <Ingredient key={ing}>
          {ingredientsIcons && ingredientsIcons[i].isLoading && (
            <IngIconThumb>
              <ClipLoader color="white" />
            </IngIconThumb>
          )}

          {ingredientsIcons && ingredientsIcons[i].isSuccess && (
            <IngIconThumb>
              <img src={ingredientsIcons[i]?.data?.config?.url} alt="" />
            </IngIconThumb>
          )}

          <IngName>{ing}</IngName>

          <IngMeasure>{measure[i]}</IngMeasure>
        </Ingredient>
      ))}
    </GridList>
  );
};
