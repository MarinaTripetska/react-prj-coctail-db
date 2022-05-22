import { FooterStyled, AuthorInfoThumb, GridThumb } from "./Footer.styled";
import coktailDBlogo from "../../assets/images/logo.png";
import { MainContainer } from "components/BasicStyledComponents/BasicStyledComponents";

export const Footer = () => {
  return (
    <FooterStyled>
      <MainContainer>
        <GridThumb>
          <AuthorInfoThumb>
            <span>©</span>
            <span>2022</span>
            <a
              href="https://github.com/MarinaTripetska"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to author's github"
            >
              github
            </a>
          </AuthorInfoThumb>
          <a
            href="https://www.thecocktaildb.com/api.php"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to data base TheCoktailDB"
          >
            <img src={coktailDBlogo} alt="" />
          </a>
        </GridThumb>
      </MainContainer>
    </FooterStyled>
  );
};
