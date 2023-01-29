/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useParams } from "react-router-dom";

const container = css`
  height: 1920px;
  width: 1080px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const btn = css`
  width: 70vw;
  height: 10vh;
  border-radius: 10vh;
  margin-top: 1vh;
`;

const text = css`
  font-size: 80px;
  display: contents;
`;

function SelectTime() {
  const { jijum, curl, time } = useParams();

  return (
    <div css={container}>
      {/* {pays.map((pay, idx) => ( */}
      <Link to={`/${curl}/${time}/pay`}>
        <button css={btn}>
          <p css={text}>결제하기</p>
        </button>
      </Link>
      {/* ))} */}
    </div>
  );
}

export default SelectTime;
