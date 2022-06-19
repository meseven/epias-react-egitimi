import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

function DashboardLayout() {
  return (
    <div>
      <Menu />

      <div className="content">
        <Outlet />
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default DashboardLayout;
