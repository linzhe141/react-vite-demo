import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { fetchList } from "../api/index";
export type ListItemProps = {
  name: string;
  id: number;
};
const Test2 = () => {
  const [keyword, setKeyword] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [filterList, setFilterList] = useState<ListItemProps[]>([]);
  const [allList, setAllList] = useState<ListItemProps[]>([]);
  const searchKeywodHandle = (value: string, allList: ListItemProps[]) => {
    setKeyword(value);
    if (value) {
      setFilterList(allList.filter((item) => item.name.includes(value)));
    } else {
      setFilterList(allList);
    }
  };

  const getList = async () => {
    const allList = await fetchList();
    setAllList(allList);
    searchKeywodHandle("", allList);
  };
  useEffect(() => {
    getList();
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <input
        value={keyword}
        ref={inputRef}
        onChange={(e) => {
          searchKeywodHandle(e.target.value, allList);
        }}
      />
      <div style={{ height: "300px" }}>
        {filterList.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
};
export default Test2;
