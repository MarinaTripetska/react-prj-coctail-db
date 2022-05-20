import { MainContainer } from "components/BasicStyledComponents/BasicStyledComponents";
import { Navigation } from "components/Navigation";
import { SearchInput } from "components/SearchInput";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <MainContainer>
        <Navigation />
        <SearchInput />
      </MainContainer>
    </Header>
  );
};
