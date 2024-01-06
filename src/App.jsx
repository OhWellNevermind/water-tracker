import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import { SharedLayout } from "./components/SharedLayout";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/user/operations";
import { selectIsLoggedIn } from "./redux/user/selectors";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { ModalSelector } from "./components/modals/ModalSelector";
import { Toaster } from "react-hot-toast";

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [modalName, setModalName] = useState("");
  console.log(modalName);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout setModalName={setModalName} />}>
          {isLoggedIn ? (
            <Route path="/" element={<Home setModalName={setModalName} />} />
          ) : (
            <Route path="/" element={<WelcomePage />} />
          )}
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
      <Toaster />
      <ModalSelector
        modalName={modalName}
        closeModal={() => {
          setModalName("");
        }}
      />
    </>
  );
};
