import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../../api/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const checkEmailValid = () => {
    if (email.match(emailRegex) !== null && email.trim() !== "") {
      setEmailIsValid(true);
    } else {
      console.log("이메일은 @와 .을 포함합니다.");
    }
  };

  const checkPasswordValid = () => {
    if (password.length >= 7) {
      setPasswordIsValid(true);
    } else {
      console.log("비밀번호는 8자 이상 입력해주세요");
    }
  };

  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    checkEmailValid();
    checkPasswordValid();

    // if (!emailIsValid & !passwordIsValid) {
    //   return;
    // }

    const user = {
      email: email,
      password: password,
    };

    loginAPI(user)
    .then(async (response) => {
      if (response.ok) {
        const res = await response.json();
        localStorage.setItem(response, res.token);
        console.log("로그인 성공!!")
      }
    })
    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={formSubmissionHandler}>
        <div>
          <label htmlFor="email">ID</label>
          <input
            type="text"
            id="email"
            onChange={emailInputChangeHandler}
            placeholder="hello@word.com"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            onChange={passwordInputChangeHandler}
            value={password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        아직 회원이 아니신가요? <Link to="/auth/signup">회원가입</Link>
      </p>
    </div>
  );
};

export default Login;
