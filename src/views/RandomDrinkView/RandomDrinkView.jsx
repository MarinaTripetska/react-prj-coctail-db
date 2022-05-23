import axios from "axios";
import { RandomDrinkCard } from "components/RandomDrinkCard";
import { useQueries } from "react-query";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import { Gradient, StyledThumb, TitleThumb } from "./RandomDrinkView.styled";
import { Title } from "components/Title";
import { Logo } from "components/Logo";
import { Loader } from "components/Loader";

const coktailCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

        onError: (error) => console.log(error),
      };
    })
  );

  return (
    <StyledThumb>
      <TitleThumb>
        <Title>Welcome to</Title> <Logo />
      </TitleThumb>

      <Gradient />

      <Carousel
        width="1000px"
        autoPlay
        dynamicHeight
        emulateTouch
        swipeable
        infiniteLoop
        centerMode
        centerSlidePercentage={60}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        onClickItem={(_, el) => navigate(`/drink/${el.key}`)}
      >
        {randomCoktails.map((coktailObj, i) => {
          const drink = coktailObj.data?.data?.drinks[0];

          if (coktailObj.isLoading) {
            return <Loader key={i} />;
          }

          if (drink && coktailObj.isSuccess) {
            return (
              <RandomDrinkCard
                key={drink.idDrink}
                id={drink.idDrink}
                imgUrl={drink.strDrinkThumb}
                name={drink.strDrink}
                style={{ height: 300 }}
              />
            );
          }

          //question for UI designer: shold we show error here? in Slider???
        })}
      </Carousel>
    </StyledThumb>
  );
};
