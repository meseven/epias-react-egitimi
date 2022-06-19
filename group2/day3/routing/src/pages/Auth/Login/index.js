import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  return (
    <div className="login">
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type={"password"} />
      </div>
      <div>
        <button type="submit" onClick={() => navigate("/")}>
          Click
        </button>
      </div>
    </div>
  );
}

export default Login;
