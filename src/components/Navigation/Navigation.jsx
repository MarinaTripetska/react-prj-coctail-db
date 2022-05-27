import { GridList, Nav, NavLinkStyled } from "./Navigation.styled";
import { useLocation } from "react-router-dom";
import { NavButton } from "components/NavButton";

export const Navigation = () => {
  const location = useLocation();
  const shouldShowNavBtn = location.pathname !== "/";

  return (
    <Nav>
      <GridList>
        {shouldShowNavBtn && (
          <li>
            <NavButton />
          </li>
        )}
        <li>
          <NavLinkStyled to="/">Main page</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/drinks/alcoholic">Alcoholic</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/drinks/non-alcoholic">
            Non Alcoholic
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/drinks/ordinary-drink">
            Ordinary Drinks
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/drinks/cocktail">Cocktails</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/drinks/shake">Shake</NavLinkStyled>
        </li>
      </GridList>
    </Nav>
  );
};
