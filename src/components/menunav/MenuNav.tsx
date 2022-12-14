export type MenuNavProps<T> = {
  data: T[];
};
const MenuNav = ({ data }: MenuNavProps<any>) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div style={{ paddingLeft: item.level * 10 + "px" }}>
              {item.name}
            </div>
            {item?.children?.length ? <MenuNav data={item.children} /> : null}
          </div>
        );
      })}
    </>
  );
};
export default MenuNav;
