import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Login = lazy(() => import("@/view/login/Login"));
const NotAuth = lazy(() => import("@/view/error/403"));
const NotFound = lazy(() => import("@/view/error/404"));
const NotNetwork = lazy(() => import("@/view/error/500"));

const Layout = lazy(() => import("@/layout/Layout"));
const ViewContent = lazy(() => import("@/layout/ViewContent"));
const Test1 = lazy(() => import("@/view/Test1"));
const Test2 = lazy(() => import("@/view/Test2"));
const staticRoutes = [
  {
    path: "/login",
    element: <Login />,
    meta: { requireAuth: false },
  },
  { path: "/403", element: <NotAuth />, meta: { requireAuth: false } },
  { path: "/404", element: <NotFound />, meta: { requireAuth: false } },
  { path: "/500", element: <NotNetwork />, meta: { requireAuth: false } },
  { path: "*", element: <Navigate to="/404" />, meta: { requireAuth: false } },
];

const authRoutes = [
  {
    path: "/",
    element: <Navigate to="test1" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/test1",
        element: (
          <ViewContent>
            <Test1 />
          </ViewContent>
        ),
      },
      {
        path: "/test2",
        element: (
          <ViewContent>
            <Test2 />
          </ViewContent>
        ),
      },
    ],
  },
];
export const rootRoutes = [...staticRoutes, ...authRoutes];

const Router = () => {
  const routes = useRoutes(rootRoutes);
  return routes;
};

export const searchRoute = (pathname: string, rootRoutes: any[]): any => {
  for (let i = 0; i < rootRoutes.length; i++) {
    const item = rootRoutes[i];
    if (item.path === pathname) return item;
    if (item.children?.length) {
      return searchRoute(pathname, item.children);
    }
  }
  return null;
};

export default Router;
