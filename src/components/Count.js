/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const countStyle = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  button {
    padding: 7px 15px;
    font-size: 60px;
    border: none;
    background-color: white;
    margin: 0 5px;
  }
  .numStyle {
    display: flex;
    height: 46px;
    width: 46px;
    font-size: 45px;
    color: white;
    align-items: center;
    justify-content: center;
    background-color: black;
  }
`;

export default function Count({ num, initialAccount, setNum, setAccount }) {
  console.log(initialAccount);
  return (
    <div css={countStyle}>
      <button
        onClick={() => {
          if (num > 1) {
            setNum((prev) => prev - 1);
            setAccount((prev) => prev - initialAccount);
          }
        }}>
        -
      </button>
      <div className="numStyle">{num}</div>
      <button
        onClick={() => {
          setNum((prev) => prev + 1);
          setAccount((prev) => prev + initialAccount);
        }}>
        +
      </button>
    </div>
  );
}
