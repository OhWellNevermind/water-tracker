import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/Home/WelcomePage/WelcomePage";
export const App = () => {
  return (
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route index element={<WelcomePage />} />
    </Routes>
  );
};
