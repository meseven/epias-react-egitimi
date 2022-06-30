import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Register</h3>

      <input type="text" placeholder="username" />
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button onClick={() => navigate("/")}>Register</button>
    </div>
  );
}

export default Register;
