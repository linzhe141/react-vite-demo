import { FC, useRef, useEffect, useState } from "react";
import style from "./index.module.scss";
import { MouseDirection } from "../../utils/mouseDirection";
import BarChart from "./BarChart";
import { Props } from "./BarChart";
function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const getMockData = () => {
  const result: Props["value"] = [];
  for (let i = 0; i < 20; i++) {
    result.push({
      name: "test" + random(1, 1000),
      value: random(10, 40),
    });
  }
  return result;
};
const Test4: FC = (props) => {
  const wrapRef = useRef<HTMLElement>(null) as React.RefObject<HTMLDivElement>;
  const contentRef: any = useRef<HTMLElement>(null);
  const [bardata, setBardata] = useState<Props["value"]>([]);
  useEffect(() => {
    setBardata(getMockData());
    if (wrapRef.current && contentRef.current) {
      console.log("wrapRef", wrapRef);
      const mouseDirection = new MouseDirection({
        element: wrapRef.current,
        content: contentRef.current,
        leftMoveCallback() {
          console.log("左滑结束回调");
          console.log(bardata.length);
          setTimeout(() => setBardata([...bardata, ...getMockData()]), 200);
        },
        rightMoveCallback() {
          console.log("右滑结束回调");
          setTimeout(() => setBardata(getMockData()), 200);
        },
      });
    }
  }, []);
  return (
    <div>
      <div className={style.wrap} ref={wrapRef}>
        <div ref={contentRef} style={{ height: "100%" }}>
          <BarChart value={bardata} />
        </div>
        {/* <div className={style.xxx} ref={contentRef}></div> */}
      </div>
    </div>
  );
};
export default Test4;
