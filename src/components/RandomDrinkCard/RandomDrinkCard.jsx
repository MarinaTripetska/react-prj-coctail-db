import { Link, useLocation } from "react-router-dom";

export const RandomDrinkCard = ({ id, name, imgUrl }) => {
  const location = useLocation();

  return (
    <Link
      to={`/drink/${id}`}
      state={{
        from: location.pathname,
        search: location.search,
      }}
    >
      <img src={imgUrl} alt={name} height="300" />
      <h2 className="legend">{name}</h2>
    </Link>
  );
};
