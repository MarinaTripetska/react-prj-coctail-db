import { MainContainer } from "components/BasicStyledComponents";
import { ListCocktails } from "components/ListCocktails";
import { Title } from "components/Title";
import { BgImageThumb, ContentThumb } from "./ListDrinksTemplate.styled";

import Background1 from "../../assets/images/dark-bg.jpg";
import Background2 from "../../assets/images/dark-bg2.jpg";
import Background3 from "../../assets/images/brick-wall.jpg";

const backgrounds = [Background1, Background2, Background3];
function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export const ListDrinksTemplate = ({ title, drinksData, children }) => {
  return (
    <BgImageThumb imgObj={getRandom(backgrounds)}>
      <MainContainer>
        <ContentThumb>
          <Title>{title}</Title>

          {drinksData && <ListCocktails drinks={drinksData} />}

          {children}
        </ContentThumb>
      </MainContainer>
    </BgImageThumb>
  );
};
