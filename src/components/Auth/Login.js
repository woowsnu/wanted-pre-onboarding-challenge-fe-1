import React,{ useState }  from "react";
import { Link } from "react-router-dom";
import { loginAPI } from "../../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이 코드는 일종의 속임수, 오류처럼 보이지 않기 위해 쓴 것
  // const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  // 사용자가 입력창을 사용했는지에 대한 상태
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const enteredEmailIsValid = email.trim() !== '' && regEmail;
  // 입력값이 유효하지 않고 && 입력이 이뤄졌을 때
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const emailInputChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);

    if (email.trim() == "") {
      //setEnteredEmailIsValid(false);
    }
  };

  const passwordInputChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    const user = {
      email: email,
      password: password,
    };

    if (email.trim() == "") {
      //setEnteredEmailIsValid(false);
      return;
    }

    loginAPI(user);
    //setEnteredEmailIsValid(true);
    setEmail("");
  };

  
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <div>
      <form onSubmit={formSubmissionHandler}>
        <div className={emailInputClasses}>
          <label htmlFor="email">ID</label>
          <input
            type="text"
            id="email"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            placeholder="hello@word.com"
            value={email}
          />
          {emailInputIsInvalid && (
            <p className="error-text">Email must not be empty.</p>
          )}
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
