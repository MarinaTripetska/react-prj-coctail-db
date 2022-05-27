import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDrinkById } from "APIoperations/getRequests";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import {
  CathegoryGrid,
  CathegoryItem,
  DrinkThumb,
  Title,
} from "./SingleDrinkPage.styled";
import { MainContainer } from "components/BasicStyledComponents";
import { slugify } from "HelperOperations/slugify";
import { SingleDrinkView } from "views/SingleDrinkView";

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

          <SingleDrinkView drink={drink} />
        </MainContainer>
      </DrinkThumb>
    );
  }
};

export default SingleDrinkPage;
