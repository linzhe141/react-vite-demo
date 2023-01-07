import { FC, useRef, useEffect } from "react";
import * as echarts from "echarts";
export type Props = {
  value: { name: string; value: number }[];
};
const BarChart: FC<Props> = (props) => {
  const { value } = props;
  const chartRef = useRef<HTMLDivElement>(null);
  const init = (value: Props["value"]) => {
    if (!chartRef.current) return;
    const chart = echarts.init(chartRef.current);
    const option = {
      grid: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        containLabel: true,
      },
      // dataZoom: [
      //   {
      //     // show: false,
      //     type: "inside",
      //     start: 0,
      //     end: 50,
      //     minSpan: 50,
      //     maxSpan: 50,
      //     // minValueSpan: 10,
      //     // maxValueSpan: 10,
      //   },
      //   {
      //     // show: false,
      //     start: 0,
      //     end: 50,
      //     minSpan: 50,
      //     maxSpan: 50,
      //     // minValueSpan: 10,
      //     // maxValueSpan: 10,
      //   },
      // ],
      xAxis: {
        type: "category",
        data: value.map((item) => item.name),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: value,
          type: "line",
        },
      ],
    };
    chart.setOption(option);
    chart.off("datazoom");
    chart.on("datazoom", (params) => {
      console.log(params);
      // setTimeout(() => {
      //   option.dataZoom[0].start = 50;
      //   option.dataZoom[0].end = 100;
      //   option.dataZoom[1].start = 50;
      //   option.dataZoom[1].end = 100;
      //   chart.setOption(option);
      // }, 300);
    });
  };
  useEffect(() => {
    init(value);
    console.log("useEffect barchart props value", value.length);
  }, [value]);
  return <div ref={chartRef} style={{ height: "100%", width: "100%" }}></div>;
};
export default BarChart;
