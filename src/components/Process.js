/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Process({
  color1 = "#F7F7F7",
  color2 = "#F7F7F7",
  color3 = "#F7F7F7",
}) {
  const processStyle = css`
    padding-top: 3vh;
    width: 80vw;
    height: 10vh;
    margin: 0 10vw 0 10vw;
    display: flex;
    justify-content: center;
    align-items: center;

    #pro1 {
      fill: ${color1};
    }

    #pro2 {
      fill: ${color2};
    }

    #pro3 {
      fill: ${color3};
    }

    text {
      font-size: 30px;
      font-weight: 100;
    }
  `;
  return (
    <div css={processStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 846.5 78.001">
        <g id="레이어_2" data-name="레이어 2">
          <g id="레이어_1-2" data-name="레이어 1">
            <path id="pro1" d="M34,5a34,34,0,0,0,0,68H281.333l20-34-20-34Z" />
            <path
              id="pro2"
              d="M810,5H562.666l20,34-20,34H810a34,34,0,0,0,0-68Z"
            />
            <path
              id="pro3"
              d="M562.666,5l20,34-20,34H281.333l20-34-20-34H562.666"
            />
            <text transform="translate(97.322 49.002)">선택화면</text>
            <text transform="translate(373.322 49.002)">결제진행</text>
            <text transform="translate(648.322 49.002)">결제완료</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
