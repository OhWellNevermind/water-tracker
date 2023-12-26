import { Suspense } from "react";
import { Outlet } from "react-router";
import { Container } from "../pages/WelcomePage/Container";

export const SharedLayout = () => {
  return (
    <div>
      <div>Header</div>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
};
