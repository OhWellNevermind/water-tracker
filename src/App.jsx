import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
// import { routes } from "./constants/roots";
// import { Header } from "./components/Header/Header";
// import { Layout } from "./components/Layout/Layout";
import { SharedLayout } from "./components/SharedLayout";

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

/* <Route path={routes.Home} element={<Layout />} />; */
// <Route index element={<Header />} />;
