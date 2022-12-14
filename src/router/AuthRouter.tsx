import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { StoreProps } from "../store/index";
import { searchRoute, rootRoutes } from "./router";

const AuthRouter = (props: { children: JSX.Element }) => {
  const { pathname } = useLocation();
  const route = searchRoute(pathname, rootRoutes);
  const { token } = useSelector((state: StoreProps) => state.global);
  // debugger;
  if (route?.meta?.requireAuth === false) return props.children;
  if (!token) return <Navigate to="/login" replace />;
  return props.children;
};

export default AuthRouter;
