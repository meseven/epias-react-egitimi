import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";

// pages
import Contact from "./pages/Dashboard/Contact";
import Home from "./pages/Dashboard/Home";
import Products from "./pages/Dashboard/Products";
import UserDetail from "./pages/Dashboard/UserDetail";
import Users from "./pages/Dashboard/Users";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default Router;
