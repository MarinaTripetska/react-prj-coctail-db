import { GridList, Nav, NavLinkStyled } from "./Navigation.styled";
import { useLocation } from "react-router-dom";
// import { NavButton } from "components/NavButton";

export const Navigation = () => {
  const location = useLocation();
  // const pathname = location.pathname;
  // const pathnameFrom = location.state?.from;
  // const searchFrom = location.state?.search;

  return (
    <Nav>
      <GridList>
        {/* {pathnameFrom && pathname !== "/" && (
          <li>
            <NavButton />
          </li>
        )} */}
        <li>
          <NavLinkStyled
            to="/"
            state={{
              from: location.pathname,
              search: location.search,
            }}
          >
            Main page
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/drinks/alcoholic"
            state={{
              from: location.pathname,
              search: location.search,
            }}
          >
            Alcoholic
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/drinks/non-alcoholic"
            state={{
              from: location.pathname,
              search: location.search,
            }}
          >
            Non Alcoholic
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/drinks/ordinary-drink"
            state={{
              from: location.pathname,
              search: location.search,
            }}
          >
            Ordinary Drinks
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/drinks/cocktail"
            state={{
              from: location.pathname,
              search: location.search,
            }}
          >
            Cocktails
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to="/drinks/shake"
            state={{
              from: location.pathname,
              search: location.search,
            }}
          >
            Shake
          </NavLinkStyled>
        </li>
      </GridList>
    </Nav>
  );
};
