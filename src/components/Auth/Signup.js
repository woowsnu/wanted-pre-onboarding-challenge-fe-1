import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import { signupAPI } from "../../api/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regEmail =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  
    const [emailIsValid, setEmailIsValid] = useState(false);

  //const emailInputIsInvalid = regEmail.test() && email.trim() !== "";

  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);

    // if (regEmail.test()) {
    //   setEmailIsValid(false);
    // }
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!regEmail.test()) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }

    const user = {
      email: email,
      password: password,
    };

    
    console.log(emailIsValid);
    console.log(user);
    signupAPI(user);


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
