/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  flex-wrap: wrap;
  p {
    font-size: 40px;
  }
  p:nth-of-type(1) {
    transform: translateX(55px);
  }
`;

const imgBox = css`
  height: 35vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const btnStyle = css`
  height: 8vh;
  width: 75vw;
  border-radius: 10px;
  color: white;
  background-color: rgba(35, 24, 21, 0.8);
  border: rgba(35, 24, 21, 0.8);
  font-size: 45px;
`;
export default function useCurls() {
  const navigate = useNavigate();
  const { curl, time } = useParams();
  return (
    <>
      <Nav />
      <Process color2={"#d2c6e1"} />
      <div css={container}>
        <div css={imgBox}>
          <img src="/payComplete.png" height="750" width="auto" />
        </div>
        <div css={{ flexWrap: "wrap" }}>
          <p>아래의 START 버튼을 눌러</p>
          <p>나만의 셀프스타일링을 시작하세요!</p>
        </div>
      </div>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <button
          css={btnStyle}
          onClick={() => navigate("/curling", { state: { curl, time } })}>
          START
        </button>
      </div>
    </>
  );
}
