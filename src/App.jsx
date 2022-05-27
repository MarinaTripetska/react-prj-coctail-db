import { Navigate, Route, Routes } from "react-router-dom";
import { ALPHABET } from "./constance/alphabet";
import { AppBar } from "components/AppBar";
import RandomDrinkView from "views/RandomDrinkView";
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
const DrinksShakeView = load("views/DrinksShakeView");
const DrinksOtherView = load("views/DrinksOtherView");
const DrinksCocoaView = load("views/DrinksCocoaView");
const DrinksShotView = load("views/DrinksShotView");
const DrinksCoffeeTeaView = load("views/DrinksCoffeeTeaView");
const DrinksHomemadeLiqueurView = load("views/DrinksHomemadeLiqueurView");
const DrinksPunchPartyDrinkView = load("views/DrinksPunchPartyDrinkView");
const DrinksBeerView = load("views/DrinksBeerView");
const DrinksSoftDrinkView = load("views/DrinksSoftDrinkView");

const SingleDrinkPage = load("pages/SingleDrinkPage");

const MainThumb = styled.main`
  padding-top: 100px;
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
            <Route path="drinks/shake" element={<DrinksShakeView />} />
            <Route path="drinks/otherunknown" element={<DrinksOtherView />} />
            <Route path="drinks/cocoa" element={<DrinksCocoaView />} />
            <Route path="drinks/shot" element={<DrinksShotView />} />
            <Route path="drinks/coffee-tea" element={<DrinksCoffeeTeaView />} />
            <Route
              path="drinks/homemade-liqueur"
              element={<DrinksHomemadeLiqueurView />}
            />
            <Route
              path="drinks/punch-party-drink"
              element={<DrinksPunchPartyDrinkView />}
            />
            <Route path="drinks/beer" element={<DrinksBeerView />} />
            <Route path="drinks/soft-drink" element={<DrinksSoftDrinkView />} />

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
