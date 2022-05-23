import { Link } from "react-router-dom";

export const Card = ({ id, imgUrl, name }) => {
  return (
    <Link to={`/drink/${id}`}>
      <img src={imgUrl} alt={name} />
      <h2>{name}</h2>
    </Link>
  );
};
