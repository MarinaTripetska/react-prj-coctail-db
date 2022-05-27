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
    <>
      <ContentThumb>
        <div>
          <Image src={drink.strDrinkThumb} alt={drink.strDrink} />
          <GlassInfo>Glass you need: {drink.strGlass}</GlassInfo>
        </div>

        <TextThumb>
          <div>
            <Title>Drink ingredients</Title>
            <IngredientsList ingredients={ingredients} measure={measure} />
          </div>
        </TextThumb>
      </ContentThumb>

      <div>
        <Title>How to make it</Title>
        <Instructions>{drink.strInstructions}</Instructions>
      </div>
    </>
  );
};
