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
            Ordinary Drink
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/drinks/cocktail">Cocktail</NavLinkStyled>
        </li>
      </GridList>
    </Nav>
  );
};
