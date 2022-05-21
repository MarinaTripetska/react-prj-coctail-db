import { Navigate, Route, Routes } from "react-router-dom";
import { ALPHABET } from "./constance/alphabet";
import { AppBar } from "components/AppBar";
import MainPage from "pages/MainPage";
import { SingleDrinkPage } from "pages/SingleDrinkPage";
import { DrinksByLetterView } from "views/DrinksByLetterView";
import { DrinksByNameView } from "views/DrinksByNameView";
import { RandomDrinkView } from "views/RandomDrinkView";
import { ManualyuSearchView } from "views/ManualyuSearchView";
import { DrinksAlcocholicView } from "views/DrinksAlcocholicView";
import { DrinksNonAlcocholicView } from "views/DrinksNonAlcocholicView";
import { DrinksOrdynaryView } from "views/DrinksOrdynaryView";
import { DrinksCoktailView } from "views/DrinksCoktailView";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/*" element={<MainPage />}>
          <Route index element={<RandomDrinkView />} />

          <Route path="drinks" element={<ManualyuSearchView />}>
            {ALPHABET.small.map((letter) => (
              <Route
                key={letter}
                path=":letter"
                element={<DrinksByLetterView />}
              />
            ))}
          </Route>
        </Route>

        <Route path="drinks/alcoholic" element={<DrinksAlcocholicView />} />

        <Route
          path="drinks/non-alcoholic"
          element={<DrinksNonAlcocholicView />}
        />

        <Route path="drinks/ordinary-drink" element={<DrinksOrdynaryView />} />
        <Route path="drinks/cocktail" element={<DrinksCoktailView />} />

        <Route path="/drink/:drinksId" element={<SingleDrinkPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
