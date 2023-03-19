/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "../../components/Nav";
import Process from "../../components/Process";
import Btn from "../../components/UI/Btn";

const container = css`
  height: 55vh;
  width: 90vw;
  background-color: white;
  display: flex;
  margin: 10vw 4vw 0 4vw;
  justify-content: space-around;
  button {
    height: 30vh;
    width: 40vw;
    border-radius: 10px;
    background-color: #eeeeef;
    border: #eeeeef;
  }

  .twoM:focus {
    border: 10px solid pink;
  }
  .fiveM:focus {
    border: 10px solid pink;
  }
  .description {
    font-size: 22px;
    margin: "50px 0 0 0";
  }
  .time {
    font-size: 50px;
    margin: 5px 0 40px 0;
    padding-bottom: 100px;
  }
  .pay {
    font-size: 80px;
    margin: 0px 0 5px 0;
  }
`;

function SelectTime() {
  const [selectTime, setSelectTime] = useState(false);
  const { curl } = useParams();
  return (
    <>
      <Nav />
      <Process color1={"#d2c6e1"} />
      <div css={container}>
        <button className="twoM" onClick={() => setSelectTime(2)}>
          <p className="description">망가진 헤어를 간단히 수정할 때</p>
          <p className="time">2분사용</p>
          <p className="pay">2,000원</p>
        </button>
        <button className="fiveM" onClick={() => setSelectTime(5)}>
          <p className="description">헤어 전체를 수정하거나 스티일링 할 때</p>
          <p className="time">5분사용</p>
          <p className="pay">4,000원</p>
        </button>
      </div>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <Btn
          nextUrl={`/${curl}/${selectTime}/selectPay`}
          prevUrl={"/selectCurl"}
        />
      </div>
    </>
  );
}

export default SelectTime;
