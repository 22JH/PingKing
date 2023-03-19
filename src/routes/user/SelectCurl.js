/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Nav } from "../../components/Nav";
import Btn from "../../components/UI/Btn";
import Process from "../../components/Process";

const container = css`
  height: 55vh;
  width: 80vw;
  background-color: white;
  display: flex;
  margin: 10vw 10vw 0 10vw;
  flex-direction: column;
  font-size: 15px;
`;

const checkBoxCss = css`
  width: 25px;
  height: 25px;
  margin: 10px 0 20px 0;
`;

const btn = css`
  width: 70vw;
  height: 10vh;
  border-radius: 10vh;
  margin-top: 1vh;
`;

const text = css`
  font-size: 47px;
  display: contents;
`;

function SelectCurl() {
  // const { jijum } = useParams();
  const [checked, setChecked] = useState(false);

  /// redux로 전체에서 가져와야할듯
  const curls = [
    { name: " 봉고데기", curlName: "curling" },
    { name: " 판고데기", curlName: "flat" },
    { name: " 드라이기", curlName: "dryer" },
  ];

  const onChange = (e) => {
    setChecked(e.target.value);
    console.log(checked);
  };
  const curlList = curls.map((curl, idx) => {
    return (
      <div key={idx} css={{ lineHeight: "90px" }}>
        <label>
          <input
            css={checkBoxCss}
            type="radio"
            value={curl.curlName}
            checked={checked == curl.curlName}
            onChange={onChange}
          />
          <p css={text}>{curl.name} (보다나)</p>
          <hr />
        </label>
      </div>
    );
  });
  return (
    <>
      <Nav />
      <Process color1={"#d2c6e1"} />
      <div css={container}>{curlList}</div>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <Btn nextUrl={`/${checked}/SelectTime`} prevUrl={"/home"} />
      </div>
    </>
  );
}

export default SelectCurl;
