import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
// import { routes } from "./constants/roots";
// import { Header } from "./components/Header/Header";
// import { Layout } from "./components/Layout/Layout";

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

/* <Route path={routes.Home} element={<Layout />} />; */
// <Route index element={<Header />} />;
