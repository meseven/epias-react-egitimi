import React from "react";
import { Link } from "react-router-dom";

function AuthMenu() {
  return (
    <div className="auth-menu">
      <Link to="/auth">Login</Link>
      <Link to="/auth/register">Register</Link>
    </div>
  );
}

export default AuthMenu;
