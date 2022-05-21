import { Link } from "react-router-dom";

export const ListCoctails = ({ drinks }) => {
  return (
    <ul>
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link to={`/drink/${drink.idDrink}`}>
            <div>
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
              <h2>{drink.strDrink}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
