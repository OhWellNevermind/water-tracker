import { Routes, Route } from "react-router-dom";
// import WelcomePage  from './pages/WelcomePage/WelcomePage'
import { GlobalStyles } from "./components/GlobalStyles";
import { SharedLayout } from "./components/SharedLayout";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
