import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};
