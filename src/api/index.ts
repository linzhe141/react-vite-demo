import { ListItemProps } from "../view/test2/Test2";
export const fetchList = async () => {
  return await new Promise((resolve: (value: ListItemProps[]) => void) => {
    setTimeout(() => {
      const list = [
        { name: "linzhe141", id: 1 },
        { name: "tiantian", id: 2 },
        { name: "xxxxx", id: 3 },
        { name: "test", id: 4 },
      ];
      resolve(list);
    }, 100);
  });
};
