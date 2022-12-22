import style from "./index.module.scss";
import { NavLink } from "react-router-dom";

const Sider = () => {
  return (
    <div className={style.sider_wrap}>
      <div>
        <NavLink
          to="test1"
          className={({ isActive }) =>
            isActive ? style["link-active"] : style.link
          }
        >
          Test1
        </NavLink>
      </div>
      <div>
        <NavLink
          to="test2"
          className={({ isActive }) =>
            isActive ? style["link-active"] : style.link
          }
        >
          Test2
        </NavLink>
      </div>
      <div>
        <NavLink
          to="test3"
          className={({ isActive }) =>
            isActive ? style["link-active"] : style.link
          }
        >
          Test3
        </NavLink>
      </div>
    </div>
  );
};
export default Sider;
