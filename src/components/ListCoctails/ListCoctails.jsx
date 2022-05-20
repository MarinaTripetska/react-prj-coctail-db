import { Link } from "react-router-dom";

export const ListCoctails = ({ coktails }) => {
  return (
    <ul>
      {coktails.map((coktail) => (
        <li key={coktail.idDrink}>
          <Link to={`/coktail/${coktail.idDrink}`}>
            <div>
              <img src={coktail.strDrinkThumb} alt={coktail.strDrink} />
              <h2>{coktail.strDrink}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
