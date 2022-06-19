import React from "react";
import { Outlet } from "react-router-dom";
import AuthMenu from "../../components/AuthMenu";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <AuthMenu />
      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
