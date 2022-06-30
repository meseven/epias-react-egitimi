import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <button onClick={() => navigate(-1)}>Geri</button>

      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/users">Kullanıcılar</Link>
        </li>
        <li>
          <Link to="/products">Ürünler</Link>
        </li>
        <li>
          <Link to="/contact">İletişim</Link>
        </li>
      </ul>

      <button onClick={() => navigate("/auth")}>Çıkış</button>
    </div>
  );
}

export default Menu;
