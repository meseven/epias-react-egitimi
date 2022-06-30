import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/Auth";
import DashboardLayout from "./layouts/Dashboard";

// pages
const Contact = lazy(() => import("./pages/Dashboard/Contact"));
const Home = lazy(() => import("./pages/Dashboard/Home"));
const Products = lazy(() => import("./pages/Dashboard/Products"));
const UserDetail = lazy(() => import("./pages/Dashboard/UserDetail"));
const Users = lazy(() => import("./pages/Dashboard/Users"));
const Login = lazy(() => import("./pages/Auth/Login"));
const Register = lazy(() => import("./pages/Auth/Register"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default Router;
