import { useLocation } from "react-router-dom";
import { Image, LinkStyled, Title, TitleThumb } from "./Card.styled";

export const Card = ({ id, imgUrl, name }) => {
  const location = useLocation();

  return (
    <LinkStyled
      to={`/drink/${id}`}
      state={{
        from: location.pathname,
        search: location.search,
      }}
    >
      <Image src={imgUrl} alt={name} />

      <TitleThumb>
        <Title>{name}</Title>
      </TitleThumb>
    </LinkStyled>
  );
};
