import { MainContainer } from "components/BasicStyledComponents/BasicStyledComponents";
import { useLocation } from "react-router-dom";
import { ALPHABET } from "../../constance/alphabet";
import {
  GridList,
  GridItem,
  NavLinkStyled,
} from "./AlphabetNavigationList.styled";

export const AlphabetNavigationList = () => {
  const location = useLocation();

  return (
    <MainContainer>
      <GridList>
        {ALPHABET.capitalize.map((letter) => (
          <GridItem key={letter}>
            <NavLinkStyled
              to={`/drinks/${letter.toLowerCase()}`}
              state={{
                from: location.pathname,
                search: location.search,
              }}
            >
              {letter}
            </NavLinkStyled>
          </GridItem>
        ))}
      </GridList>
    </MainContainer>
  );
};
