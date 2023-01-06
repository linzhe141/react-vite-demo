import { FC, useRef, useEffect } from "react";
import style from "./index.module.scss";
import { MouseDirection } from "../../utils/mouseDirection";
import BarChart from "./BarChart";

const Test4: FC = (props) => {
  const wrapRef = useRef<HTMLElement>(null) as React.RefObject<HTMLDivElement>;
  const contentRef: any = useRef<HTMLElement>(null);
  useEffect(() => {
    if (wrapRef.current && contentRef.current) {
      console.log("wrapRef", wrapRef);
      const mouseDirection = new MouseDirection({
        element: wrapRef.current,
        content: contentRef.current,
        leftMoveCallback() {
          console.log("左滑结束回调");
        },
        rightMoveCallback() {
          console.log("右滑结束回调");
        },
      });
    }
  }, []);
  return (
    <div>
      <div className={style.wrap} ref={wrapRef}>
        <div ref={contentRef} style={{ height: "100%" }}>
          <BarChart />
        </div>
      </div>
    </div>
  );
};
export default Test4;
