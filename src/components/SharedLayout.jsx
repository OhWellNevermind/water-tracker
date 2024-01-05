import { Suspense } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import { Toaster } from "react-hot-toast";

export const SharedLayout = ({ setModalName }) => {
  return (
    <>
      <Header setModalName={setModalName} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </>
  );
};
