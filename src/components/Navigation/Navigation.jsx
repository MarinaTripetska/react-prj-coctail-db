import { GridList, Nav, NavLinkStyled } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Nav>
      <GridList>
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
      </GridList>
    </Nav>
  );
};
