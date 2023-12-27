import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import { SharedLayout } from "./components/SharedLayout";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="welcome" element={<WelcomePage />} />
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/welcome" component={<Home />} />
            }
          />
          <Route
            path="signup"
            element={<RestrictedRoute redirectTo="/" component={<SignUp />} />}
          />
          <Route
            path="signin"
            element={<RestrictedRoute redirectTo="/" component={<SignIn />} />}
          />
        </Route>
      </Routes>
      <GlobalStyles />
    </>
  );
};
