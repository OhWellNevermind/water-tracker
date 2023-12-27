import { Suspense } from "react";
import { Outlet } from "react-router";

export const SharedLayout = () => {
  return (
    <>
      <header>Header</header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
