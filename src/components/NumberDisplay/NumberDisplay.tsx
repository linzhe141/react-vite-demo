import { FC, useState } from "react";
import style from "./numberDisplay.module.scss";
const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
interface Props {
  numberString: string;
}
const numReg = /\d/;
const NumberDisplay: FC<Props> = (props: Props) => {
  const { numberString } = props;
  return (
    <>
      <div className={style.numberDisplay}>
        {numberString.split("").map((digit, i) =>
          numReg.test(digit) ? (
            <div className={style.wrap} key={i}>
              {numbers.map((item, index) => (
                <div
                  key={index}
                  className={style.numberItem}
                  style={{
                    transform: `translate(-50%, -${Number(digit) * 30}px)`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div className={style.wrap} key={i}>
              <div className={style.splitItem}>{digit}</div>
            </div>
          )
        )}
      </div>
    </>
  );
};
export default NumberDisplay;
