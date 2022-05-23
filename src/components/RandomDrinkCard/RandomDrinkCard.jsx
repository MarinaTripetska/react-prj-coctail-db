import { Link } from "react-router-dom";

export const RandomDrinkCard = ({ id, name, imgUrl }) => {
  return (
    <Link to={`/drink/${id}`}>
      <img src={imgUrl} alt={name} height="300" />
      <h2 className="legend">{name}</h2>
    </Link>
  );
};
