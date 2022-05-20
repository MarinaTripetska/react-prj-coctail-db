import { Route, Routes } from "react-router-dom";

import { ALPHABET } from "./constance/alphabet";

import { AppBar } from "components/AppBar";
import MainPage from "pages/MainPage";
import CoktailsByLetterPage from "./pages/CoktailsByLetterPage";
import { AlphabetNavigationList } from "components/AlphabetNavigationList";
import { SingleCoktailPage } from "pages/SingleCoktailPage";

function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<MainPage />} />

        {ALPHABET.small.map((letter) => (
          <Route
            key={letter}
            path=":letter"
            element={<CoktailsByLetterPage />}
          />
        ))}

        <Route path="/coktail/:coktailId" element={<SingleCoktailPage />} />
      </Routes>

      <AlphabetNavigationList />
    </>
  );
}

export default App;
