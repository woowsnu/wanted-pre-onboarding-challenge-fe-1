import React from "react";
import { useState } from "react";
import { signupAPI } from "../../api/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  };

  const createUser = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
    signupAPI(user);
  };
  return (
    <div>
      <form onSubmit={createUser}>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailInputHandler}
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
