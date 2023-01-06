import MenuNav from "@/components/menunav/MenuNav";
import { useMousemoveHooks } from "../../hooks/useMousemoveHooks";
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
const Test1 = () => {
  const coord = useMousemoveHooks();
  return (
    <>
      <p>递归组件</p>
      <MenuNav data={menuData} />
      <p>自定义hooks</p>
      <div style={{ height: "600px" }}>{JSON.stringify(coord)}</div>
    </>
  );
};
export default Test1;
