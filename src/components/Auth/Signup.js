import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupAPI } from "../../api/auth";

const Signup = () => {
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
      console.log("이메일은 @와 .을 포함합니다.")
    }
  };

  const checkPasswordValid = () => {
    if (password.length >= 7) {
      setPasswordIsValid(true);
    } else {
      console.log("비밀번호는 8자 이상 입력해주세요")
    }
  };
  
  // console.log(emailRef)
  // const enterdEmail = emailRef.current
  // const enterdPassword = passwordRef.current
  // const [inputIsValid, setInputIsValid] = useState(false);
  
  // const checkValid = () => {
  //   const inputCondition =
  //     enterdEmail.match(emailRegex) !== null &&
  //     enterdEmail.trim() !== "" &&
  //     enterdPassword.length > 7 &&
  //     enterdPassword.trim() !== "";
  //   if (inputCondition) {
  //     setInputIsValid(true);
  //   }
  // };

  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    checkEmailValid();
    checkPasswordValid();

    if (!emailIsValid && !passwordIsValid) {
      return;
    }

    const user = {
      email: email,
      password: password,
    };

    signupAPI(user).then((response) => {
      if (response.ok) {
        console.log(response);
        console.log("회원가입 성공!!!");
        navigate("/");
      } else {
        console.log("회원가입에 실패했습니다.");
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailInputChangeHandler}
        />
        <br />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={passwordInputHandler}
        />
        <br />
        {/* <label htmlFor="password">비밀번호 확인</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={passwordInputHandler}
        />
        <br /> */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
