import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { fetchList } from "../../api/index";
import NumberDisplay from "@/components/NumberDisplay/NumberDisplay";
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
  const [numberString, setNumberString] = useState("123");
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    setInterval(() => {
      setNumberString((numberString) => Number(numberString) + 1 + "");
      setTime(Date.now());
    }, 1000);
  }, []);
  const timeStr = useMemo(() => {
    console.log(dayjs(time).format("HH:mm:ss"));
    return dayjs(time).format("HH:mm:ss");
  }, [time]);
  return (
    <>
      <input
        value={keyword}
        ref={inputRef}
        onChange={(e) => {
          searchKeywodHandle(e.target.value, allList);
        }}
      />
      <div>
        {filterList.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      <p>===========</p>
      <NumberDisplay numberString={numberString} />
      <p>===========</p>
      <NumberDisplay numberString={timeStr} />
    </>
  );
};
export default Test2;
