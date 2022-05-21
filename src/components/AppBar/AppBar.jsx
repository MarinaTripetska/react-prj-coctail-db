import { MainContainer } from "components/BasicStyledComponents/BasicStyledComponents";
import { Navigation } from "components/Navigation";

import { Header } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <MainContainer>
        <Navigation />
      </MainContainer>
    </Header>
  );
};
