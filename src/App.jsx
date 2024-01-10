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
import { selectIsLoadingUsers, selectIsLoggedIn } from "./redux/user/selectors";
import { selectIsLoadingWaterTrack } from "./redux/waterTracker/selectors";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { ModalSelector } from "./components/modals/ModalSelector";
import { Toaster } from "react-hot-toast";
import { UpdatePasswordPage } from "./pages/UpdatePasswordPage/UpdatePasswordPage";
import { ForgotPasswordForm } from "./pages/ForgotPasswordPage/ForgotPasswordForm";
import { Audio } from "react-loader-spinner";

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoadingWaterTrack = useSelector(selectIsLoadingWaterTrack);
  const isLoadingUsers = useSelector(selectIsLoadingUsers);
  const [modalName, setModalName] = useState("");
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {(isLoadingWaterTrack || isLoadingUsers) && (
        <>
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Чорне затемнення з прозорістю
              zIndex: 9998, // Зменште zIndex, щоб затемнення було позаду лоадера
            }}
          ></div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="loading"
            wrapperStyle={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 9999,
              background: "rgba(50, 50, 50, 0.8)",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
            }}
            wrapperClass
          />
        </>
      )}
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
          <Route
            path="forgot-password"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<ForgotPasswordForm />}
              />
            }
          />
          <Route
            path="update-password/:verificationCode"
            element={
              <RestrictedRoute
                redirectTo="/"
                component={<UpdatePasswordPage />}
              />
            }
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
