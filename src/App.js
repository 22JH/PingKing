/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/user/Login";
import Home from "./routes/user/Home";
import SelectCurl from "./routes/user/SelectCurl";
import SelectTime from "./routes/user/SelectTime";
import SelectPay from "./routes/user/SelectPay";
import UseCurl from "./routes/user/UseCurl";
import Curling from "./routes/Curling";
import Finish from "./routes/Finish";
import PayCash from "./routes/user/PayCash";
import PayCard from "./routes/user/PayCard";

export const GlobalStyle = css`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

  body {
    margin: 0 0 0 0;
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
  text,
  p {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
  }
`;

function App() {
  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/SelectJijum" element={<SelectJijum />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/selectCurl" element={<SelectCurl />} />
        <Route path="/:curl/selectTime" element={<SelectTime />} />
        <Route path="/:curl/:time/selectPay" element={<SelectPay />} />
        {/* <Route path="/:curl/:time/pay" element={<PayCard />} /> */}
        {/* <Route path="/:curl/:time/카드" element={<PayCard />} /> */}
        <Route path="/:curl/:time/:account/use-curl" element={<UseCurl />} />
        <Route path="/curling" element={<Curling />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App;
