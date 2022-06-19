import React from "react";

function Register() {
  return (
    <div className="login">
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type={"password"} />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </div>
  );
}

export default Register;
