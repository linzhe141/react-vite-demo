import { useNavigate, Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sider from "./sider/Sider";
const Layout = () => {
  const navigate = useNavigate();
  const logoutHandle = () => {
    navigate("/login");
  };
  return (
    <div className="flex-column h100 w100">
      <Header />
      <div className="flex1 flex h0">
        <Sider />
        <div
          className="flex1"
          style={{ background: "#f0f2f5", overflow: "auto" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
