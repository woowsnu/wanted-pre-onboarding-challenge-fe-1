import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/auth">회원가입/로그인</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>메인페이지</div>} exact={true} />
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
