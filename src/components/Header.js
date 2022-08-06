import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/auth">회원가입/로그인</Link>
      </li>
    </ul>
  );
};

export default Header;
