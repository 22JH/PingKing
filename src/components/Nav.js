/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const navStyle = css`
  height: 10vh;
  width: 100vw;
  background: #d2c6e1;
  display: flex;
  align-items: center;
  font-size: 30px;
`;

export function Nav() {
  return <div css={navStyle}></div>;
}
