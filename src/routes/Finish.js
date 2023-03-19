/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
const container = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .textBox {
    width: auto;
    position: absolute;
    left: 24%;
    top: 28%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p:nth-of-type(1) {
    font-size: 80px;
  }
  p:nth-of-type(2) {
    font-size: 50px;
  }
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

export default function Finish() {
  const navigate = useNavigate();
  return (
    <div css={container}>
      <img src="/finish.png" height="1920" width="1080" />
      <div className="textBox">
        <p>
          이용해 주셔서 <br />
          감사합니다.
        </p>
        <p>
          지갑 및 소지품을 잊지마시고
          <br /> 꼭 챙겨주세요
        </p>
        <div css={{ position: "absolute", left: "-18%", top: "170%" }}>
          <button css={btnStyle} onClick={() => navigate("/home")}>
            메인화면으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
