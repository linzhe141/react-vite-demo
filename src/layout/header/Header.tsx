import style from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeToken } from "../../store/modules/global/global";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandle = () => {
    dispatch(removeToken());
    navigate("/login");
  };
  return (
    <div className={style.herder_wrap + " space-between"}>
      <div>logo</div>
      <button className="btn" onClick={logoutHandle}>
        <span>退出</span>
      </button>
    </div>
  );
};
export default Header;
