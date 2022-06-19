import React from "react";
import { Link } from "react-router-dom";

function AuthMenu() {
  return (
    <div>
      <ul className="auth-menu">
        <li>
          <Link to="/auth">Login</Link>
        </li>
        <li>
          <Link to="/auth/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default AuthMenu;
