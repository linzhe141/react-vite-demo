import { useEffect, useState } from "react";
export const useMousemoveHooks = () => {
  const [coord, setCoord] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const foo = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setCoord({ x, y });
    };
    window.addEventListener("mousemove", foo);
    return () => {
      window.removeEventListener("mousemove", foo);
    };
  }, []);
  return coord;
};
