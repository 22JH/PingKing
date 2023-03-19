/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Nav } from "../../components/Nav";
import { useParams } from "react-router-dom";
import Count from "../../components/Count";
import Btn from "../../components/UI/Btn";
import Process from "../../components/Process";

const container = css`
  height: 20.6vh;
  width: 80vw;
  background-color: white;
  margin: 0 10vw 0 10vw;
  flex-wrap: nowrap;
  font-size: 15px;

  .section1 {
    display: flex;
    align-items: baseline;
    margin-bottom: 30px;
    p {
      margin: 0 0 0 0;
    }
    p:nth-of-type(1) {
      font-size: 40px;
      flex-grow: 0;
      margin: 0 20px 0 20px;
    }
    p:nth-of-type(2) {
      font-size: 75px;
      flex-grow: 4;
    }
    p:nth-of-type(3) {
      font-size: 40px;
      flex-grow: 1;
    }
    p:nth-of-type(4) {
      font-size: 60px;
      flex-grow: 1;
      color: tomato;
    }
  }
  .section2 {
    display: flex;
    align-items: baseline;
    margin-bottom: 30px;
    p {
      margin: 0 0 0 0;
    }
    p:nth-of-type(1) {
      font-size: 35px;
      flex-grow: 2;
      margin: 0 20px 0 20px;
    }
    p:nth-of-type(2) {
      font-size: 60px;
      flex-grow: 1;
    }
    .countBtn {
      flex-grow: 1;
    }
  }
`;

const imgStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`;

function SelectCurl() {
  const [num, setNum] = useState(1);
  const { curl, time } = useParams();
  const imgUrl = `/curling/${curl}.png`;
  const { checked } = useParams();
  /////////나중에 전체 상태관리에서 바꾸기/////
  const initialAccount = time == 2 ? 2000 : 4000;

  const curlNameKr = () => {
    if (curl === "dryer") {
      return "드라이기";
    } else if (curl === "flat") {
      return "판고데기";
    } else {
      return "봉고데기";
    }
  };

  ////////////////////////////////////
  const [account, setAccount] = useState(initialAccount);

  return (
    <>
      <Nav />
      <Process color3={"#d2c6e1"} />
      <div css={container}>
        <div className="section1">
          <p>이용시간</p>
          <p>{time}분</p>
          <p>선택 금액</p>
          <p>{initialAccount}</p>
        </div>
        <hr />
        <div className="section2">
          <p>상품명: {curlNameKr()} (보다나)</p>
          <div className="countBtn">
            <Count
              num={num}
              initialAccount={initialAccount}
              setNum={setNum}
              setAccount={setAccount}
            />
          </div>
          <p>{account}</p>
        </div>
      </div>
      <div css={imgStyle}>
        <img src={imgUrl} height="600" width="auto" />
      </div>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <Btn
          nextUrl={`/${curl}/${time}/${account}/use-curl`}
          prevUrl={"/home"}
        />
      </div>
    </>
  );
}

export default SelectCurl;
