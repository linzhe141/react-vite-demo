import { FC, useRef, useEffect } from "react";
import * as echarts from "echarts";
const BarChart: FC = (props) => {
  const chartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };
      chart.setOption(option);
    }
  }, []);
  return <div ref={chartRef} style={{ height: "100%", width: "100%" }}></div>;
};
export default BarChart;
