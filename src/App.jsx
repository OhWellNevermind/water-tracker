import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
