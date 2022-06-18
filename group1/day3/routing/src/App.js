import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

// pages
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Users from "./pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
