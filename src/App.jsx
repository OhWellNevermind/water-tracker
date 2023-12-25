import { Routes, Route } from "react-router-dom";
import WelcomePage from './pages/WelcomePage'
import { GlobalStyles } from "./components/GlobalStyles";
import { SharedLayout } from "./components/SharedLayout";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
