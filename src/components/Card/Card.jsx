import { Image, LinkStyled, Title, TitleThumb } from "./Card.styled";

export const Card = ({ id, imgUrl, name }) => {
  return (
    <LinkStyled to={`/drink/${id}`}>
      <Image src={imgUrl} alt={name} />

      <TitleThumb>
        <Title>{name}</Title>
      </TitleThumb>
    </LinkStyled>
  );
};
