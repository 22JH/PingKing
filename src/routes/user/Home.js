/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";

const container = css`
  height: 1920px;
  width: 1080px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const textDeco = css`
  font-size: 50px;
  font-weight: bolder;
  color: rgb(255, 255, 255);
  animation: GgamBBak 1.5s infinite;
  @keyframes GgamBBak {
  50% {
    opacity: 0;
  }
`;
const img = css`
  width: 50%;
  height: 50%;
  margin-bottom: 100px;
`;

function Home() {
  const { jijum } = useParams();
  let navigate = useNavigate();
  function handleClick() {
    navigate(`/SelectCurl`);
  }
  return (
    <div css={container} onClick={handleClick}>
      <img src="/Logo.png" alt="logo" css={img} />
      <p css={textDeco}>화면을 클릭해 주세요</p>
    </div>
  );
}

export default Home;
