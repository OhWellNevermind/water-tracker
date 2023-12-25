import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
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
