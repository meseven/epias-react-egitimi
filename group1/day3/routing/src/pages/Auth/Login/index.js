import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Login</h3>

      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );
}

export default Login;
