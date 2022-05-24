import { Navigate, Route, Routes } from "react-router-dom";
import { ALPHABET } from "./constance/alphabet";
import { AppBar } from "components/AppBar";
// import MainPage from "pages/MainPage";
// import { SingleDrinkPage } from "pages/SingleDrinkPage";
// import { DrinksByLetterView } from "views/DrinksByLetterView";
import RandomDrinkView from "views/RandomDrinkView";
// import { ManualySearchView } from "views/ManualySearchView";
// import { DrinksAlcoholicView } from "views/DrinksAlcoholicView";
// import { DrinksNonAlcoholicView } from "views/DrinksNonAlcoholicView";
// import { DrinksOrdinaryView } from "views/DrinksOrdinaryView";
// import { DrinksCoktailView } from "views/DrinksCoktailView";
import { Footer } from "components/Footer";
import styled from "styled-components";
import { lazy, Suspense } from "react";
import { Loader } from "components/Loader";

const load = (componentPath) => lazy(() => import(`./${componentPath}`));

const MainPage = load("pages/MainPage");
const ManualySearchView = load("views/ManualySearchView");
const DrinksByLetterView = load("views/DrinksByLetterView");
const DrinksAlcoholicView = load("views/DrinksAlcoholicView");
const DrinksNonAlcoholicView = load("views/DrinksNonAlcoholicView");
const DrinksOrdinaryView = load("views/DrinksOrdinaryView");
const DrinksCoktailView = load("views/DrinksCoktailView");
const SingleDrinkPage = load("pages/SingleDrinkPage");

const MainThumb = styled.main`
  background-color: var(--main-bg-color);
`;

function App() {
  return (
    <>
      <AppBar />

      <MainThumb>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />}>
              <Route index element={<RandomDrinkView />} />
              <Route path="drinks" element={<ManualySearchView />}>
                {ALPHABET.small.map((letter) => (
                  <Route
                    key={letter}
                    path=":letter"
                    element={<DrinksByLetterView />}
                  />
                ))}
              </Route>
            </Route>

            <Route path="drinks/alcoholic" element={<DrinksAlcoholicView />} />

            <Route
              path="drinks/non-alcoholic"
              element={<DrinksNonAlcoholicView />}
            />

            <Route
              path="drinks/ordinary-drink"
              element={<DrinksOrdinaryView />}
            />

            <Route path="drinks/cocktail" element={<DrinksCoktailView />} />

            <Route path="/drink/:drinksId" element={<SingleDrinkPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </MainThumb>

      <Footer />
    </>
  );
}

export default App;
