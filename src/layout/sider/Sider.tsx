import style from "./index.module.scss";
import { NavLink } from "react-router-dom";
import MenuNav from "../../components/menunav/MenuNav";
const menuData = [
  {
    name: "test1",
    level: 1,
    children: [
      {
        name: "test1-1",
        level: 2,
        children: [{ name: "test1-1-1", level: 3 }],
      },
    ],
  },
  { name: "test2", level: 1 },
  { name: "test3", level: 1 },
];
const Sider = () => {
  return (
    <div className={style.sider_wrap}>
      <MenuNav data={menuData} />
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
    </div>
  );
};
export default Sider;
