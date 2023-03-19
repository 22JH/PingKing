/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const container = css`
  height: 27vh;
  width: 100vw;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;

  .textBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p:nth-of-type(1) {
    font-size: 80px;
    margin: 0 0 0 10px;
  }
  p:nth-of-type(2) {
    font-size: 30px;
    margin: 0 0 0 10px;
  }
`;

const imgBox = css`
  position: relative;

  p:nth-of-type(1) {
    position: absolute;
    top: 9%;
    left: 22%;
    font-size: 40px;
    margin: 0 0 0 0;
    color: white;
  }
  p:nth-of-type(2) {
    position: absolute;
    top: 41.5%;
    left: 41%;
    font-size: 100px;
    margin: 0 0 0 0;
  }
`;

const btnStyle = css`
  height: 7vh;
  width: 75vw;
  border-radius: 10px;
  color: white;
  background-color: rgba(35, 24, 21, 0.8);
  border: rgba(35, 24, 21, 0.8);
  font-size: 45px;
  position: absolute;
  top: 80%;
  left: 14%;
`;
export default function Curling() {
  const { curl, time } = useLocation().state;
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  return (
    <>
      <div css={container}>
        <img src="/checkBox.png" height="100" width="100" />
        <div className="textBox">
          <p>선택완료</p>
          <p>선택이 정상적으로 완료되었습니다.</p>
        </div>
      </div>
      <div css={imgBox}>
        <img src="/useCurl.png" height="100%" width="100%" />
        <p>사용 후 제자리 반납 부탁드리겠습니다.</p>
        <p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <button css={btnStyle} onClick={() => navigate("/finish")}>
          반납하기
        </button>
      </div>
    </>
  );
}
