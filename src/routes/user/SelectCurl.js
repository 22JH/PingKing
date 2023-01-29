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

function SelectCurl() {
  const { jijum } = useParams();
  // const url = `/${jijum}/SelectTime`

  const curls = [
    { name: "판고데기", curlName: "flat" },
    { name: "봉고데기", curlName: "curling" },
    { name: "드라이기", curlName: "dryer" },
  ];

  const curlList = curls.map((curl, idx) => {
    return (
      <Link to={`/${curl.curlName}/SelectTime`} key={idx}>
        <button css={btn}>
          <p css={text}>{curl.name}</p>
        </button>
      </Link>
    );
  });
  console.log(curlList);
  return <div css={container}>{curlList}</div>;
}

export default SelectCurl;
