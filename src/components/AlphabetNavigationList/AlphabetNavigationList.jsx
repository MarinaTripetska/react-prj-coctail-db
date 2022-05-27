import { MainContainer } from "components/BasicStyledComponents/BasicStyledComponents";
import { ALPHABET } from "../../constance/alphabet";
import {
  GridList,
  GridItem,
  NavLinkStyled,
} from "./AlphabetNavigationList.styled";

export const AlphabetNavigationList = () => {
  return (
    <MainContainer>
      <GridList>
        {ALPHABET.capitalize.map((letter) => (
          <GridItem key={letter}>
            <NavLinkStyled to={`/drinks/${letter.toLowerCase()}`}>
              {letter}
            </NavLinkStyled>
          </GridItem>
        ))}
      </GridList>
    </MainContainer>
  );
};
