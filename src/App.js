import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} exact={true} />
        <Route path="/todos" element={<Main />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
