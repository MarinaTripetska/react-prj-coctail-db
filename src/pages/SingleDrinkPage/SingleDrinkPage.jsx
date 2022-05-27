import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDrinkById } from "APIoperations/getRequests";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import {
  CathegoryGrid,
  CathegoryItem,
  ContentThumb,
  DrinkThumb,
  Image,
  Ingredient,
  Instructions,
  TextThumb,
  Title,
  TitleSecond,
} from "./SingleDrinkPage.styled";
import { MainContainer } from "components/BasicStyledComponents";
import { slugify } from "HelperOperations/slugify";

const SingleDrinkPage = () => {
  const { drinksId } = useParams();

  const { data, isSuccess, isLoading } = useQuery(
    `drink/${drinksId}`,

    () => getDrinkById(drinksId),

    {
      onError: (error) => Toast.notifyERROR(error.message),
    }
  );

  const drink = data?.data?.drinks[0];

  const getIingredients = (drink) =>
    Object.keys(drink)
      .filter((key) => key.includes("strIngredient"))
      .map((key) => drink[key])
      .filter((value) => value);

  const getMeasure = (drink) =>
    Object.keys(drink)
      .filter((key) => key.includes("strMeasure"))
      .map((key) => drink[key])
      .filter((value) => value);

  if (isLoading) {
    return <Loader />;
  }

  if (isSuccess && drink) {
    return (
      <DrinkThumb>
        <MainContainer>
          <Title>{drink.strDrink}</Title>

          <CathegoryGrid>
            <CathegoryItem>
              <Link to={`/drinks/${slugify(drink.strAlcoholic)}`}>
                {drink.strAlcoholic}
              </Link>
            </CathegoryItem>
            <CathegoryItem>
              <Link to={`/drinks/${slugify(drink.strCategory)}`}>
                {drink.strCategory}
              </Link>
            </CathegoryItem>
          </CathegoryGrid>
          <ContentThumb>
            <Image src={drink.strDrinkThumb} alt={drink.strDrink} />

            <TextThumb>
              <div>
                <TitleSecond>Drink glass and ingredients</TitleSecond>
                <ul>
                  <Ingredient>{drink.strGlass}</Ingredient>
                  <hr />
                  {getIingredients(drink).map((ing, i) => (
                    <Ingredient key={ing}>
                      <span>{ing}</span>
                      <span>{getMeasure(drink)[i]}</span>
                    </Ingredient>
                  ))}
                </ul>
              </div>

              <div>
                <TitleSecond>How to make it</TitleSecond>
                <Instructions>{drink.strInstructions}</Instructions>
              </div>
            </TextThumb>
          </ContentThumb>
        </MainContainer>
      </DrinkThumb>
    );
  }
};

export default SingleDrinkPage;
