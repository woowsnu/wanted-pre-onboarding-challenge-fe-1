import baseURL from ".";

// 회원가입
export const signupAPI = (user) =>
  fetch(`${baseURL}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

// 로그인
export const loginAPI = async (user) =>
  fetch(`${baseURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
