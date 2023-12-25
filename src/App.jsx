import { Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import { SignIn } from "./pages/SignIn/SignIn";

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<SignIn />} />
      </Routes>
      <GlobalStyles />
    </>
  );
};
