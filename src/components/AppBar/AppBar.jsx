import { MainContainer } from "components/BasicStyledComponents/BasicStyledComponents";
import { Navigation } from "components/Navigation";
import { BiDrink } from "react-icons/bi";
import { Header, LogoLink } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <LogoLink to="/">
        <BiDrink />
        <span>Best Home Barman</span>
      </LogoLink>

      <MainContainer>
        <Navigation />
      </MainContainer>
    </Header>
  );
};
