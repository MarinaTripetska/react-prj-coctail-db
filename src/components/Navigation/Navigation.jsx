import { GridList, Nav, NavLinkStyled } from "./Navigation.styled";
import { useLocation } from "react-router-dom";
import { NavButton } from "components/NavButton/NavButton";

export const Navigation = () => {
  const location = useLocation();
  console.log(location);
  const pathname = location.pathname;
  const pathnameFrom = location.state?.from;
  const searchFrom = location.search;

  return (
    <Nav>
      <GridList>
        {(pathnameFrom && pathname !== "/") || searchFrom ? (
          <li>
            <NavButton />
          </li>
        ) : null}

        <li>
          <NavLinkStyled
            to="/"
            state={{
              from: location.pathname,
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
            }}
          >
            Shake
          </NavLinkStyled>
        </li>
      </GridList>
    </Nav>
  );
};
///drinks/shake
