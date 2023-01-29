import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/user/Login";
import Home from "./routes/user/Home";
// import SelectJijum from "./routes/user/SelectJijum";
import SelectCurl from "./routes/user/SelectCurl";
import SelectTime from "./routes/user/SelectTime";
import SelectPay from "./routes/user/SelectPay";
import PayCash from "./routes/user/PayCash";
import PayCard from "./routes/user/PayCard";
import useCurls from "./routes/user/UseCurl";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/SelectJijum" element={<SelectJijum />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/SelectCurl" element={<SelectCurl />} />
        <Route path="/:curl/SelectTime" element={<SelectTime />} />
        <Route path="/:curl/:time/SelectPay" element={<SelectPay />} />
        <Route path="/:curl/:time/pay" element={<PayCard />} />
        {/* <Route path="/:curl/:time/카드" element={<PayCard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
