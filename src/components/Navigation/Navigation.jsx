import { GridList, Nav, NavLinkStyled } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Nav>
      <GridList>
        <li>
          <NavLinkStyled to="/">Main page (may be logo here?)</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/alcoholic">Alcoholic</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/non-alcoholic">Non Alcoholic</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/ordinary-drink">Ordinary Drink</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/cocktail">Cocktail</NavLinkStyled>
        </li>
      </GridList>
    </Nav>
  );
};
