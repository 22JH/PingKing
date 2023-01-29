import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "../../css/Login.module.css";

function Login() {
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");

  let navigate = useNavigate();

  function loginClick(e) {
    e.preventDefault();
    navigate("/home");
    // console.log(userId, pwd);
  }

  return (
    <div className={styles["login-box"]}>
      <h2>Login</h2>
      <form id="btnValue">
        <div className={styles["user-box"]}>
          <input
            type="text"
            name=""
            placeholder="아이디"
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className={styles["user-box"]}>
          <input
            type="password"
            name=""
            required=""
            placeholder="비밀번호"
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
      </form>
      <button
        form="btnValue"
        className={styles.btn}
        onClick={(e) => loginClick(e)}
      >
        <p className={styles.loginP}>로그인</p>
      </button>
    </div>
  );
}
export default Login;
