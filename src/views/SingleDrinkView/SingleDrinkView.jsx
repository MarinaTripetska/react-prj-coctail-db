import { IngredientsList } from "components/IngredientsList";
import {
  ContentThumb,
  GlassInfo,
  Image,
  Instructions,
  TextThumb,
  Title,
} from "./SingleDrinkView.styled";

export const SingleDrinkView = ({ drink }) => {
  const ingredients = Object.keys(drink)
    .filter((key) => key.includes("strIngredient"))
    .map((key) => drink[key])
    .filter((value) => value);

  const measure = Object.keys(drink)
    .filter((key) => key.includes("strMeasure"))
    .map((key) => drink[key])
    .filter((value) => value);

  return (
    <ContentThumb>
      <Image src={drink.strDrinkThumb} alt={drink.strDrink} />

      <TextThumb>
        <div>
          <Title>Drink glass and ingredients</Title>
          <GlassInfo>{drink.strGlass}</GlassInfo>
          <hr />
          <IngredientsList ingredients={ingredients} measure={measure} />
        </div>

        <div>
          <Title>How to make it</Title>

          <Instructions>{drink.strInstructions}</Instructions>
        </div>
      </TextThumb>
    </ContentThumb>
  );
};
