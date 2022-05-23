import { MainContainer } from "components/BasicStyledComponents/BasicStyledComponents";
import { Logo } from "components/Logo";
import { Navigation } from "components/Navigation";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <Logo />

      <MainContainer>
        <Navigation />
      </MainContainer>
    </Header>
  );
};
