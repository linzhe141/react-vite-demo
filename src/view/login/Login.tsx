import style from "./index.module.scss";
import loginImg from "../../assets/images/login_left.png";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FC, useEffect } from "react";
import { setToken, removeToken } from "../../store/modules/global/global";

const Login: FC = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandle = () => {
    navigate("/");
    dispatch(setToken("ewqeqw"));
    console.log(store);
  };
  useEffect(() => {
    // dispatch(removeToken());
  }, []);
  return (
    <div className={style.login_wrap + " flex"}>
      <div className="flex50 flex-center">
        <img style={{ width: "100%" }} src={loginImg} alt="" />
      </div>
      <div className="flex50 flex-center">
        <button onClick={loginHandle} className="btn">
          <span>登录</span>
        </button>
      </div>
    </div>
  );
};
export default Login;
