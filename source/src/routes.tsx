import NotFound from "components/feedback/NotFound";
import AuthenticatedRoute from "components/routes/AuthenticatedRoute";
import NotAuthenticatedRoute from "components/routes/NotAuthenticatedRoute";
import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
  ScrollRestoration,
  useRouteError,
} from "react-router-dom";
const Layout = lazy(() => import("features/layout"));
const AdminsPage = lazy(() => import("pages/admins"));
const LoginPage = lazy(() => import("pages/login"));

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<WithScroll />} errorElement={<ErrorBoundary />}>
      <Route element={<NotAuthenticatedRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route element={<AuthenticatedRoute />}>
        <Route element={<Layout />}>
          <Route path="" element={<NotFound />} />
          <Route path="admins" element={<AdminsPage />} />
          <Route path="*" element={<Navigate to="/admins" />} />
        </Route>
      </Route>
    </Route>
  )
);
function ErrorBoundary() {
  const error = useRouteError() as string;
  return <div>{error}</div>;
}
function WithScroll() {
  return (
    <>
      <Outlet />
      <ScrollRestoration
        getKey={({ pathname, search }) => {
          return pathname + search;
        }}
      />
    </>
  );
}
