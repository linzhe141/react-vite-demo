import { useMousemoveHooks } from "../hooks/useMousemoveHooks";
const Test1 = () => {
  const coord = useMousemoveHooks();
  return <div style={{ height: "600px" }}>{JSON.stringify(coord)}</div>;
};
export default Test1;
