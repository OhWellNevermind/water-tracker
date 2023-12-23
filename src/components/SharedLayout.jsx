import { Suspense } from "react";
import { Outlet } from "react-router";

export const SharedLayout = () => {
  return (
    <div>
      <div>Header</div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
