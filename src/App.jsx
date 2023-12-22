import { Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home/Home";
import { SignUp } from "./pages/Home/SignUp/SignUp";

export const App = () => {
  return (
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route index element={<SignUp />} />
    </Routes>
  );
};
