import { AppBar } from "components/AppBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AppBar />

      <main>
        <Routes>
          <Route to='/' element={main }/>
        </Routes>
      </main>
    </>
  );
}

export default App;
