import axios from "axios";
import { RandomDrinkCard } from "components/RandomDrinkCard";
import { useQueries } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import { StyledThumb, Title } from "./RandomDrinkView.styled";
// import styled from "styled-components";

// const StyledThumb = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 40px 0;
// `;

const coktailCounter = [1, 2, 3, 4, 5, 6];

export const RandomDrinkView = () => {
  const navigate = useNavigate();

  const randomCoktails = useQueries(
    coktailCounter.map((nr) => {
      return {
        queryKey: ["randomCoctail", `id:${nr}`],
        queryFn: () =>
          axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php"),

        cacheTime: 0,
        refetchOnMount: false,
        retry: 1,
      };
    })
  );

  return (
    <StyledThumb>
      <Title>Random drinks</Title>
      <Carousel
        width="700px"
        autoPlay
        dynamicHeight
        emulateTouch
        swipeable
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        onClickItem={(_, el) => navigate(`/drink/${el.key}`)}
      >
        {randomCoktails.map((coktailObj, i) => {
          const drink = coktailObj.data?.data?.drinks[0];

          // if (coktailObj.isLoading) {
          //   return (
          //     <p key={i} color="white">
          //       Loading... Mayby skeleton???
          //     </p>
          //   );
          // }

          if (coktailObj.isSuccess) {
            return (
              <RandomDrinkCard
                key={drink.idDrink}
                id={drink.idDrink}
                imgUrl={drink.strDrinkThumb}
                name={drink.strDrink}
              />
            );
          }
          //????
          return (
            <p key={i} color="white">
              {coktailObj.error}
            </p>
          );
        })}
      </Carousel>
    </StyledThumb>
  );
};
