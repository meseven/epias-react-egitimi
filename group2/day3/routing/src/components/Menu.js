import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div>
      <ul className="menu">
        <li>
          <button onClick={() => navigate(-1)}>Geri</button>
        </li>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="users">Kullanıcılar</Link>
        </li>
        <li>
          <Link to="contact">İletişim</Link>
        </li>
        <li>
          <button onClick={() => navigate("/auth")}>Çıkış</button>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
