/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function Btn({ nextUrl, prevUrl }) {
  const navigate = useNavigate();
  const btnStyle = css`
    button {
      height: 8vh;
      border-radius: 10px;
      color: white;
      font-size: 45px;
    }
    .next {
      background-color: rgba(35, 24, 21, 0.8);
      border: rgba(35, 24, 21, 0.8);
      width: 50vw;
    }
    .prev {
      background-color: rgba(35, 24, 21, 0.4);
      border: rgba(35, 24, 21, 0.4);
      margin-right: 10px;
      width: 30vw;
    }
  `;

  const nextClick = () => {
    if (nextUrl !== false) {
      navigate(nextUrl);
    }
  };

  const prevClick = () => {
    navigate(prevUrl);
  };
  return (
    <div css={btnStyle}>
      <button className="prev" onClick={() => navigate(-1)}>
        뒤로
      </button>
      <button className="next" onClick={nextClick}>
        앞으로
      </button>
    </div>
  );
}
