import { ALPHABET } from "../../constance/alphabet";
import {
  GridList,
  GridItem,
  NavLinkStyled,
} from "./AlphabetNavigationList.styled";

export const AlphabetNavigationList = () => {
  return (
    <GridList>
      {ALPHABET.capitalize.map((letter) => (
        <GridItem key={letter}>
          <NavLinkStyled to={letter.toLowerCase()}>{letter}</NavLinkStyled>
        </GridItem>
      ))}
    </GridList>
  );
};
